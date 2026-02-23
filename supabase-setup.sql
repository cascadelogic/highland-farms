-- Run this in your Supabase SQL Editor (supabase.com > your project > SQL Editor)

create table event_inquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  event_type text not null,
  preferred_date text,
  message text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table event_inquiries enable row level security;

-- Allow inserts from the anon key (public form submissions)
create policy "Allow public inserts" on event_inquiries
  for insert
  with check (true);

-- Only allow authenticated users (you) to read submissions
create policy "Allow authenticated reads" on event_inquiries
  for select
  using (auth.role() = 'authenticated');
