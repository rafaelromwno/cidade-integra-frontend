import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fyjefwpyesgedvfuewiw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5amVmd3B5ZXNnZWR2ZnVld2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTMyODQsImV4cCI6MjA2NTA2OTI4NH0.KVm_djZHkih9CKVXrPPtb2ZHiVzHhNNtYctpR2KCXsw'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase