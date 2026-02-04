"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2, Edit, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteArticle } from "../actions";
import Link from "next/link";

interface Article {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    image_url: string;
    slug: string;
}

export default function NewsTable({ articles }: { articles: Article[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-50/50">
          <TableHead className="w-[100px]">Imagen</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50">
            <TableCell>
                <div className="relative w-12 h-8 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={article.image_url} alt="" className="w-full h-full object-cover" />
                </div>
            </TableCell>
            <TableCell className="font-medium max-w-[300px] truncate">
                {article.title}
                <div className="text-[10px] text-zinc-400 font-normal truncate">{article.subtitle}</div>
            </TableCell>
            <TableCell>
                <Badge variant="outline" className="text-xs font-normal">
                    {article.category}
                </Badge>
            </TableCell>
            <TableCell>
                <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 shadow-none border-0">
                    Publicado
                </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href={`/articulo/${article.slug}`} target="_blank">
                        <Eye className="mr-2 h-4 w-4" /> Ver en vivo
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/news/${article.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" /> Editar
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <form action={deleteArticle}>
                      <input type="hidden" name="id" value={article.id} />
                      <button type="submit" className="w-full flex items-center px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-sm">
                        <Trash2 className="mr-2 h-4 w-4" /> Eliminar
                      </button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
