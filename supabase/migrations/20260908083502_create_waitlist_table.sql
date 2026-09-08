/*
# Create waitlist table

1. New Tables
- `waitlist`
- `id` (uuid, primary key)
- `full_name` (text, not null)
- `email` (text, not null, unique)
- `user_type` (text, nullable — describes the user: Salaried Professional, Freelancer, Student, Business Owner, Other)
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `waitlist`.
- Allow anon + authenticated INSERT (public signup form, no sign-in).
- Allow anon + authenticated SELECT (so the app can show a count if desired).
- No UPDATE or DELETE from the anon client.

3. Notes
- This is a no-auth public waitlist signup form, so anon access is intentional.
- Email uniqueness prevents duplicate signups.
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  user_type text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_waitlist" ON waitlist;
CREATE POLICY "anon_select_waitlist" ON waitlist FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_waitlist" ON waitlist;
CREATE POLICY "anon_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated WITH CHECK (true);
