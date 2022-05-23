import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ukwvtbrxjdolmcymvtrn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrd3Z0YnJ4amRvbG1jeW12dHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMyNzI2MzYsImV4cCI6MTk2ODg0ODYzNn0.-HLcfRlYiKR0psXMxeKVWqcBNehDjxw3T83Y_8w1-vs',
)
