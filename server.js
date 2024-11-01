import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtzmphikkxifklekfycm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0em1waGlra3hpZmtsZWtmeWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NTgwNDgsImV4cCI6MjA0MzQzNDA0OH0.qIx90Oe5tW5rejK2sR8fJ_-_ecQ78_O6AaL37OjAyiY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);