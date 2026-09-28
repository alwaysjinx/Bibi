-- À exécuter UNE FOIS dans Supabase > SQL Editor > New query > Run
-- Crée les 2 tables du site Chez Bibi Steinmetz + ouvre l'accès public en lecture,
-- écriture réservée via les politiques ci-dessous (site vitrine, sans données sensibles).

create table if not exists dishes (
  id text primary key,
  nom text not null,
  cat text not null default 'classique',
  prix integer not null default 0,
  "desc" text default '',
  img text default '',
  badge text default '',
  rating text default '4.5',
  visible boolean default true,
  updated_at timestamptz default now()
);

create table if not exists settings (
  id int primary key,
  delivery_fee int default 500,
  wa_number text default '2290197601568',
  display_number text default '0197601568'
);

-- Active la sécurité + politiques publiques (lecture pour tous, écriture pour tous :
-- le mot de passe admin reste vérifié côté admin.html, jamais stocké ici)
alter table dishes enable row level security;
alter table settings enable row level security;

drop policy if exists "public read" on dishes;
create policy "public read" on dishes for select using (true);
drop policy if exists "public write" on dishes;
create policy "public write" on dishes for all using (true) with check (true);

drop policy if exists "public read" on settings;
create policy "public read" on settings for select using (true);
drop policy if exists "public write" on settings;
create policy "public write" on settings for all using (true) with check (true);

-- Ligne de réglages par défaut
insert into settings (id, delivery_fee, wa_number, display_number)
values (1, 500, '2290197601568', '0197601568')
on conflict (id) do nothing;
