//importamos la libreria de supabase
import { createClient } from '@supabase/supabase-js'
//importamos las variables de entorno
import { VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY } from '@env'

const supabaseUrl = VITE_SUPABASE_URL
const supabaseKey = VITE_SUPABASE_PUBLISHABLE_KEY

//crearemos una instancia para la api de supabase, para esto necesitamos la url y la clave anonima
export const supabase = createClient(supabaseUrl, supabaseKey)


