-- Allow admins to delete payment records; block everyone else (inserts remain
-- server-side/service-role only via the verified payment flow).
DROP POLICY IF EXISTS "Admins can delete payments" ON public.certificate_payments;
CREATE POLICY "Admins can delete payments" ON public.certificate_payments
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to read all profiles via RLS (admin dashboard).
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));