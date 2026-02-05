"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, User, AlertCircle, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { login, signup } from "./actions";
import { createBrowserClient } from "@supabase/ssr";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* BACKGROUND NOISE & GRADIENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-electric-blue)_0%,transparent_50%)] opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

     <Suspense fallback={<AuthLoading />}>
        <AuthForm />
     </Suspense>
    </main>
  );
}

function AuthLoading() {
    return (
        <div className="relative z-10 w-full max-w-md p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl flex items-center justify-center h-[500px]">
            <Loader2 className="w-8 h-8 animate-spin text-electric-blue" />
        </div>
    )
}

function AuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-zinc-900 shadow-sm overflow-hidden relative group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0%,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity" />
             <span className="font-black text-xs tracking-tighter text-zinc-900 dark:text-white relative z-10">M&T</span>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {mode === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              {mode === "login" ? "Accede a la plataforma de inteligencia." : "Únete a la red de monitoreo ciudadano."}
            </p>
          </div>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3 text-red-400 text-xs">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{decodeURIComponent(error)}</span>
            </div>
        )}

        {/* GOOGLE BUTTON TEMPORARILY DISABLED 
        <Button 
            onClick={handleGoogleLogin} 
            variant="outline" 
            className="w-full h-11 border-white/10 bg-white/5 hover:bg-white/10 text-foreground"
            disabled={isGoogleLoading}
        >
            {isGoogleLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z"
                    />
                    <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                </svg>
            )}
            Continuar con Google
        </Button>

        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">O continúa con email</span>
            </div>
        </div>
        */}

        <form action={mode === "login" ? login : signup} className="space-y-4">
            {mode === "signup" && (
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground pl-1">Nombre Completo</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                        <input 
                        name="full_name"
                        type="text" 
                        placeholder="Luis Sambrano" 
                        className="w-full h-11 rounded-lg border border-white/10 bg-white/5 px-10 text-sm outline-none focus:border-electric-blue/50 transition-colors placeholder:text-muted-foreground/30 text-foreground"
                        required
                        />
                    </div>
                </div>
            )}
            
            <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground pl-1">Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input 
                    name="email"
                    type="email" 
                    placeholder="usuario@ejemplo.com" 
                    className="w-full h-11 rounded-lg border border-white/10 bg-white/5 px-10 text-sm outline-none focus:border-electric-blue/50 transition-colors placeholder:text-muted-foreground/30 text-foreground"
                    required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground pl-1">Contraseña</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input 
                    name="password"
                    type="password" 
                    placeholder="••••••••••••" 
                    className="w-full h-11 rounded-lg border border-white/10 bg-white/5 px-10 text-sm outline-none focus:border-electric-blue/50 transition-colors placeholder:text-muted-foreground/30 text-foreground"
                    required
                    minLength={6}
                    />
                </div>
            </div>

            <div className="pt-2">
                <SubmitButton mode={mode} />
            </div>
        </form>

        <div className="text-center">
            <button 
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
            >
                {mode === "login" ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
            </button>
        </div>

        <Link href="/" className="flex items-center justify-center text-xs text-muted-foreground/50 hover:text-foreground transition-colors group pt-4">
            <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
            Volver a inicio
        </Link>
      </motion.div>
  );
}

function SubmitButton({ mode }: { mode: "login" | "signup" }) {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="w-full h-11 rounded-lg bg-electric-blue text-black font-bold tracking-wide hover:bg-electric-blue/90 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.3)] disabled:opacity-70"
    >
      {pending ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : (
        <ShieldCheck className="w-4 h-4 mr-2" />
      )}
      {pending ? "PROCESANDO..." : (mode === "login" ? "ACCEDER" : "REGISTRARSE")}
    </Button>
  );
}
