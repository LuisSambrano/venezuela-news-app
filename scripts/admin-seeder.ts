
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing environment variables.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdmin() {
  const email = 'luissambranoarg@gmail.com';
  const password = process.argv[2] || 'Eucorei3$14'; // Allow override or default

  console.log(`Creating/Updating admin: ${email}`);

  // 1. Try to create user
  const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: 'Luis Sambrano (Admin)' }
  });

  let userId = newUser.user?.id;

  if (createError) {
    if (createError.message.includes('already registered')) {
        console.log('User already exists. Fetching ID...');
        // We can't fetch by email purely with admin.listUsers easily in a scalable way, 
        // but for this specific "seed" we will just "update" the profile if we bind to the ID.
        // Actually, listUsers supports searching.
        const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
        if (listError) throw listError;
        const found = users.find(u => u.email === email);
        if (found) {
            userId = found.id;
            console.log(`Found existing user ID: ${userId}`);
        } else {
            throw new Error("Could not find user after 'already registered' error.");
        }
    } else {
        throw createError;
    }
  } else {
      console.log(`User created with ID: ${userId}`);
  }

  if (!userId) {
      throw new Error("Failed to resolve User ID.");
  }

  // 2. Update Profile Role
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ role: 'admin' })
    .eq('id', userId);

  if (updateError) {
      console.error('Failed to promote user to Admin:', updateError);
  } else {
      console.log('✅ User promoted to ADMIN successfully.');
  }
}

createAdmin().catch(err => {
    console.error(err);
    process.exit(1);
});
