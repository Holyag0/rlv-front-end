"use client";

import React, { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

interface Document {
  id: string;
  valor_tributo: number;
  emitente: "pending" | "processing" | "success" | "failed";
  nome: string;
}

async function getData(): Promise<Payment[]> {
  const response = await fetch(`${window.location.origin}/api/documents`);
  const data: Document[] = await response.json();
  return data.map((document) => ({
    id: document.id,
    amount: document.valor_tributo,
    status: document.emitente,
    email: document.nome,
  }));
}

const DemoPage: React.FC = () => {
  const [data, setData] = useState<Payment[]>([]);

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


