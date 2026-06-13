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

  IF lower(NEW.email) IN ('edusannaonlinelearning@gmail.com', 'tinashelvurayai@gmail.com')
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