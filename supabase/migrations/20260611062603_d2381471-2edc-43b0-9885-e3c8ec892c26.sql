-- 1) Harden user_roles: explicit admin-only write policies (defense in depth).
-- Role grants normally happen via the SECURITY DEFINER trigger; these policies
-- ensure no non-admin can ever insert/update/delete roles through the Data API.
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON public.user_roles;

CREATE POLICY "Admins can insert roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles" ON public.user_roles
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 2) Fix the hidden admin-gate bootstrap.
-- Grant admin to the configured contact email OR to the very first account that
-- signs up through the hidden admin gate (is_admin_signup flag) when no admin
-- exists yet. This makes the gate correctly switch to "sign in" afterwards.
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, country, city, mobile_number, signup_type, school_name)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.email,
    NEW.raw_user_meta_data ->> 'country',
    NEW.raw_user_meta_data ->> 'city',
    NEW.raw_user_meta_data ->> 'mobile_number',
    COALESCE(NEW.raw_user_meta_data ->> 'signup_type', 'standard'),
    NEW.raw_user_meta_data ->> 'school_name'
  );

  IF lower(NEW.email) = 'edusannaonlinelearning@gmail.com'
     OR (
       COALESCE(NEW.raw_user_meta_data ->> 'is_admin_signup', '') = 'true'
       AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
     ) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  RETURN NEW;
END;
$function$;