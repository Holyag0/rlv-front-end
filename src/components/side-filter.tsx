import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function SideFilter() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [emitente, setEmitente] = useState('');
  const [tributoValue, setTributoValue] = useState('');
  const [liquidoValue, setLiquidoValue] = useState('');

  return (
    <>
      <Sheet>
        <SheetTrigger className="ml-auto flex text-black ring-1 shadow-md ring-gray-100 p-2 rounded-md hover:bg-gray-100">
          <Filter /> Filtrar
        </SheetTrigger>
        <SheetContent className="max-w-lg mx-auto">
          <SheetHeader>
            <SheetTitle>Filtrar Documentos</SheetTitle>
            <SheetDescription>
              Use os campos abaixo para filtrar os documentos.
            </SheetDescription>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Período de Criação
              </label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4 border-b border-gray-200"/>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Documento
              </label>
              <select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                <option value="">Selecione o Tipo</option>
                <option value="tipo1">Tipo 1</option>
                <option value="tipo2">Tipo 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Emitente
              </label>
              <input
                type="text"
                value={emitente}
                onChange={(e) => setEmitente(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Valor Total dos Tributos
              </label>
              <input
                type="number"
                value={tributoValue}
                onChange={(e) => setTributoValue(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Valor Líquido
              </label>
              <input
                type="number"
                value={liquidoValue}
                onChange={(e) => setLiquidoValue(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Limpar
            </button>
            <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600">
              Aplicar Filtro
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
