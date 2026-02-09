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
import { ArrowLeft, Save, Loader2, Globe, PenLine } from "lucide-react";
import { updateArticle } from "../../actions";

interface Article {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  category: string;
  image_url: string;
  slug: string;
  source?: string;
  source_url?: string;
  published?: boolean;
}

export default function EditArticleForm({ article }: { article: Article }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/admin/news">
            <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
            </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Editar Noticia</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Modificar contenido y metadatos.</p>
        </div>
        {/* Source indicator */}
        <div className="flex items-center gap-2">
          {article.source === "manual" ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <PenLine className="h-3 w-3" /> Manual
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Globe className="h-3 w-3" /> {article.source || "Agregado"}
            </span>
          )}
        </div>
      </div>

      <form action={updateArticle} className="space-y-8">
        <input type="hidden" name="id" value={article.id} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MAIN CONTENT */}
            <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                    <Label>Título Principal</Label>
                    <Input name="title" defaultValue={article.title} required className="text-lg font-bold" />
                </div>

                <div className="space-y-2">
                    <Label>Subtítulo / Bajada</Label>
                    <Textarea name="subtitle" defaultValue={article.subtitle} required className="h-24 resize-none" />
                </div>

                <div className="space-y-2">
                    <Label>Contenido del Artículo (Markdown)</Label>
                    <Textarea name="content" defaultValue={article.content} required className="min-h-[400px] font-mono text-sm leading-relaxed p-4" />
                </div>
            </div>

            {/* SIDEBAR METADATA */}
            <div className="space-y-6">
                <div className="p-6 rounded-xl glass-panel border border-zinc-200 dark:border-zinc-800 space-y-6">
                    <div className="space-y-2">
                        <Label>Categoría</Label>
                        <Select name="category" required defaultValue={article.category}>
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
                        <Input name="image_url" defaultValue={article.image_url} required />
                        <p className="text-[10px] text-zinc-400">Recomendado: 16:9, min 1200px</p>
                    </div>

                    {article.source_url && (
                      <div className="space-y-2">
                        <Label className="text-zinc-500">Fuente Original</Label>
                        <a
                          href={article.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-blue-400 hover:text-blue-300 truncate font-mono"
                        >
                          {article.source_url}
                        </a>
                      </div>
                    )}

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
            {pending ? "Guardando..." : "Guardar Cambios"}
        </Button>
    )
}
