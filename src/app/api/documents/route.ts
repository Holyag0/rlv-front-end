import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prismaCliente';

export async function GET() { 
    try { 
        const documents = await prisma.document.findMany(); 
        return NextResponse.json(documents, { status: 200 }); 
    } 
    catch (error) {
         return NextResponse.json({ 
            error: "Erro ao buscar documentos" }, 
            { status: 500 }); }
         } 
         export async function POST(request: NextRequest) { 
            try { 
                const { nome, emitente, valor_tributo, valor_liquido, tipo } = await request.json(); 
                const newDocument = await prisma.document.create({ 
                    data: { 
                        nome, 
                        emitente, 
                        valor_tributo, 
                        valor_liquido, 
                        tipo, 
                    }, 
                }); 
                return NextResponse.json(newDocument, { status: 201 });
             } catch (error) { 
                return NextResponse.json({ error: "Erro ao criar documento" }, { status: 500 });
            }
        }