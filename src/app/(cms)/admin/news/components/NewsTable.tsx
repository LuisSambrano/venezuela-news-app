"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2, Edit, Eye, Globe, PenLine } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteArticle, togglePublished } from "../actions";
import Link from "next/link";

interface Article {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    image_url: string;
    slug: string;
    source?: string;
    published?: boolean;
}

/**
 * Renders the source badge (manual vs aggregated) for each article.
 * Helps editors distinguish between human-written and auto-fetched content.
 */
function SourceBadge({ source }: { source?: string }) {
  if (source === "manual") {
    return (
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
        <PenLine className="h-2.5 w-2.5" />
        Manual
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
      <Globe className="h-2.5 w-2.5" />
      {source || "agregado"}
    </span>
  );
}

export default function NewsTable({ articles }: { articles: Article[] }) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-white/10 hover:bg-transparent">
            <TableHead className="w-[80px] text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Imagen</TableHead>
            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Detalles</TableHead>
            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Categoría</TableHead>
            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Fuente</TableHead>
            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Estado</TableHead>
            <TableHead className="text-right text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
              <TableCell className="py-4">
                  <div className="relative w-12 h-8 rounded-sm overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={article.image_url} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
              </TableCell>
              <TableCell>
                  <div className="flex flex-col gap-1 max-w-[300px]">
                    <span className="font-mono text-sm text-zinc-300 group-hover:text-white transition-colors truncate block">
                        {article.title}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600 truncate block">
                        ID: {article.id.slice(0, 8)}...
                    </span>
                  </div>
              </TableCell>
              <TableCell>
                  <div className="inline-flex items-center px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {article.category}
                  </div>
              </TableCell>
              <TableCell>
                  <SourceBadge source={article.source} />
              </TableCell>
              <TableCell>
                  <form action={togglePublished}>
                    <input type="hidden" name="id" value={article.id} />
                    <input type="hidden" name="published" value={String(article.published ?? true)} />
                    <button
                      type="submit"
                      className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                      title={article.published !== false ? "Click para despublicar" : "Click para publicar"}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        article.published !== false
                          ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                          : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                      }`} />
                      <span className={`text-[10px] font-mono font-medium uppercase tracking-wider ${
                        article.published !== false ? "text-emerald-500" : "text-amber-500"
                      }`}>
                        {article.published !== false ? "Publicado" : "Borrador"}
                      </span>
                    </button>
                  </form>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 text-zinc-500 hover:text-white hover:bg-white/10 rounded-sm">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-zinc-950 border border-white/10 text-zinc-400">
                    <DropdownMenuLabel className="text-[9px] uppercase tracking-widest font-mono text-zinc-600">Acciones</DropdownMenuLabel>
                    <DropdownMenuItem asChild className="focus:bg-blue-900/20 focus:text-blue-400 font-mono text-xs cursor-pointer">
                      <Link href={`/articulo/${article.slug}`} target="_blank">
                          <Eye className="mr-2 h-3.5 w-3.5" /> Ver en vivo
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="focus:bg-blue-900/20 focus:text-blue-400 font-mono text-xs cursor-pointer">
                      <Link href={`/admin/news/${article.id}/edit`}>
                          <Edit className="mr-2 h-3.5 w-3.5" /> Editar
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <form action={deleteArticle}>
                        <input type="hidden" name="id" value={article.id} />
                        <button type="submit" className="w-full flex items-center px-2 py-1.5 text-xs font-mono text-red-500 hover:bg-red-900/20 hover:text-red-400 rounded-sm transition-colors">
                          <Trash2 className="mr-2 h-3.5 w-3.5" /> Eliminar
                        </button>
                    </form>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
