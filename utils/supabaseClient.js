import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://vsgvbjvabquhejqkytmj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzZ3ZianZhYnF1aGVqcWt5dG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5MDE5OTMsImV4cCI6MjAxNzQ3Nzk5M30.hxKkjV5zrVueLE321m9eNNHj2ERHpdamHcLOs2c_rfI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
