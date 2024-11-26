"use client";

import React, { useEffect, useState } from "react";
import { Document, columns } from "./columns";
import { DataTable } from "./data-table";

interface Documents {
  id: string;
  nome: string;
  emitente: string;
  valor_tributo: number;
  valor_liquido:number,
  createAt?:string,
  updateAt?:string
}

async function getData(): Promise<Document[]> {
  const response = await fetch(`${window.location.origin}/api/documents`);
  const data: Documents[] = await response.json();
  return data.map((document) => ({
    id: document.id,
    nome: document.nome,
    valor_tributo: document.valor_tributo,
    emitente: document.emitente,
    valor_liquido: document.valor_liquido,
    createAt: document.createAt ?? new Date().toISOString(), 
    updateAt: document.updateAt ?? new Date().toISOString()  
  }));
}
const DemoPage: React.FC = () => {
  const [data, setData] = useState<Document[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DemoPage;


