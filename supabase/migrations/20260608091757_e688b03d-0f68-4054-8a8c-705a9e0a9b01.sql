CREATE TABLE public.certificate_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_name text,
  email text,
  course_id text NOT NULL,
  course_name text,
  certificate_type text NOT NULL CHECK (certificate_type IN ('certificate','diploma')),
  amount numeric NOT NULL DEFAULT 0,
  paypal_order_id text,
  certificate_id text,
  payment_status text NOT NULL DEFAULT 'paid_pending_admin',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.certificate_payments TO authenticated;
GRANT ALL ON public.certificate_payments TO service_role;

ALTER TABLE public.certificate_payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own payments"
ON public.certificate_payments
FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update payments"
ON public.certificate_payments
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_certificate_payments_updated_at
BEFORE UPDATE ON public.certificate_payments
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();