create extension if not exists pgcrypto;

create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  created_at timestamptz default now()
);

create table assessments (
  id serial primary key,
  name text,
  company text,
  employees text,
  priority text,
  blueprint text,
  created_at timestamptz default now()
);
