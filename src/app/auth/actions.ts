'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/auth?error=invalid_credentials')
  }

  revalidatePath('/', 'layout')
  redirect('/admin/dashboard')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()
  
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      full_name: formData.get('full_name') as string,
    }
  
    const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
                full_name: data.full_name
            }
        }
    })
  
    if (error) {
      redirect(`/auth?error=signup_error`)
    }
  
    // Redirect to check email or dashboard if auto-confirmed
    redirect('/auth?error=check_email')
  }
