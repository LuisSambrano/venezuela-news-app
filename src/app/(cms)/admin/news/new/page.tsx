"use client";

import { useFormStatus } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { createArticle } from "../actions";

export default function NewArticlePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/admin/news">
            <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
            </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Nueva Noticia</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Redacción y publicación de inteligencia.</p>
        </div>
      </div>

      <form action={createArticle} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MAIN CONTENT */}
            <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                    <Label>Título Principal</Label>
                    <Input name="title" placeholder="Ej: Avance Tecnológico en..." required className="text-lg font-bold" />
                </div>

                <div className="space-y-2">
                    <Label>Subtítulo / Bajada</Label>
                    <Textarea name="subtitle" placeholder="Breve resumen o contexto..." required className="h-24 resize-none" />
                </div>

                <div className="space-y-2">
                    <Label>Contenido del Artículo (Markdown)</Label>
                    <Textarea name="content" placeholder="# Título\n\nEscribe aquí..." required className="min-h-[400px] font-mono text-sm leading-relaxed p-4" />
                </div>
            </div>

            {/* SIDEBAR METADATA */}
            <div className="space-y-6">
                <div className="p-6 rounded-xl glass-panel border border-zinc-200 dark:border-zinc-800 space-y-6">
                    <div className="space-y-2">
                        <Label>Categoría</Label>
                        <Select name="category" required defaultValue="General">
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="General">General</SelectItem>
                                <SelectItem value="Economía">Economía</SelectItem>
                                <SelectItem value="Tecnología">Tecnología</SelectItem>
                                <SelectItem value="Política">Política</SelectItem>
                                <SelectItem value="Cripto">Cripto</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>URL de Imagen</Label>
                        <Input name="image_url" placeholder="https://..." required />
                        <p className="text-[10px] text-zinc-400">Recomendado: 16:9, min 1200px</p>
                    </div>

                    <div className="pt-4">
                        <SubmitButton />
                    </div>
                </div>
            </div>
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full bg-blue-600 hover:bg-blue-700">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            {pending ? "Publicando..." : "Publicar Noticia"}
        </Button>
    )
}
