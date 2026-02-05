
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function seedAdmin() {
  const email = "admin@mt-venezuela.com";
  const password = "admin_protocol_zero"; // Strong-ish default for dev
  const fullName = "Director de Inteligencia";

  console.log(`\n🛡️  Seeding Master Admin: ${email}...`);

  // 1. Check if user exists
  const { data: existingUsers } = await supabase.auth.admin.listUsers();
  const exists = existingUsers.users.find(u => u.email === email);

  if (exists) {
    console.log("✅ Admin user already exists. Updating credentials...");
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      exists.id,
      { password: password, user_metadata: { full_name: fullName, role: 'admin' } }
    );
    if (updateError) {
      console.error("❌ Failed to update admin:", updateError.message);
      return;
    }
    console.log("🔒 Password reset to default.");
  } else {
    // 2. Create user if not exists
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm
      user_metadata: { full_name: fullName, role: 'admin' }
    });

    if (error) {
      console.error("❌ Error creating admin:", error.message);
      return;
    }
    console.log(`✨ Admin created successfully! ID: ${data.user.id}`);
  }

  console.log(`\n👉 Login Credentials:\n   Email: ${email}\n   Pass:  ${password}\n`);
}

seedAdmin();
