"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal,View,Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { format } from 'date-fns'; 
import { ptBR } from 'date-fns/locale'

export type Document = {
  id: string,
  nome:string,
  emitente: string,
  valor_tributo: number,
  valor_liquido:number,
  createAt:string,
  updateAt:string
}
export const columns: ColumnDef<Document>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nome",
    header: "Nome do documento",
  },
  {
    accessorKey: "emitente",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Emitente
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "valor_liquido",
    header: ({ column }) => (
      <div>
        Valores Liquido
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="-ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("valor_liquido"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "valor_tributo",
    header: ({ column }) => (
      <div>
        Valores Tributo
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="-ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("valor_tributo"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "createAt",
    header: "Data de Emissão",
    cell: ({ row }) => {
      const dateValue: unknown = row.getValue("createAt");
      if (typeof dateValue === "string") {
        const date = new Date(dateValue);
        const options: Intl.DateTimeFormatOptions = {
          day: "2-digit",
          month: "long",
          year: "numeric",
        };
        const formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(
          date
        );
        return <div className="font-medium">{formattedDate}</div>;
      }
      return <div className="font-medium">Data não disponível</div>;
    },
  },
  {
    id: "actions",
    header: ({ column }) => <div>Actions</div>,
    cell: ({ row }) => {
      const Documents = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <View />
              Visulisar Documentos
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Trash2 />
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
