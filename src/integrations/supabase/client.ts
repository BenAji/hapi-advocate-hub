// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pxojzzywzrtjnpvfhhpo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4b2p6enl3enJ0am5wdmZoaHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMzE2NzUsImV4cCI6MjA2NTcwNzY3NX0.SEoH8eO6ae3wyaGoQbxrIIgmcXJRDjqaxhqB3Xms3_k";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);