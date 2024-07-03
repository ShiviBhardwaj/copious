import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uqyfzdetaexqcfhmeluc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxeWZ6ZGV0YWV4cWNmaG1lbHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4Nzk4NzQsImV4cCI6MjAzNTQ1NTg3NH0.t7a4OoYSnkovTl1Tc4-ddfB9XeW4O3DfU2RB3lg7Mvg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
