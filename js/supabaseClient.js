// js/supabaseClient.js

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://fnyrptzgafykvhzibjed.supabase.co",
  "sb_publishable_G_BA6XtU28JCcP0XaifoXw_A8VvBrst"
);