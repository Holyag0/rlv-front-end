import { NextRequest } from 'next/server'
import prisma from '@/prismaCliente';

export async function GET() {
  try {
    const documents = await prisma.document.findMany();
    return new Response(JSON.stringify(documents), { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar documentos:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar documentos" }),
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const { nome, emitente, valor_tributo, valor_liquido, tipo } =
      await request.json();
    const newDocument = await prisma.document.create({
      data: { nome, emitente, valor_tributo, valor_liquido, tipo },
    });
    return new Response(JSON.stringify(newDocument), { status: 201 });
  } catch (error) {
    console.error("Erro ao criar documento:", error);
    return new Response(JSON.stringify({ error: "Erro ao criar documento" }), {
      status: 500,
    });
  }
}