import { createClient } from '@supabase/supabase-js'
export const URL = 'https://vkevzeccldwdvekpeawu.supabase.co'
export const API_KEY = 'sb_publishable_f4W3W0GtUxx8ujCibJPw3A_kQqmPgem'
export const supabase = createClient(URL, API_KEY)
