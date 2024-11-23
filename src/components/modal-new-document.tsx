import React, { useState } from 'react';
import { FileUp,MoveRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Documents = () => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(files);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="ml-auto flex text-white ring-1 shadow-md ring-gray-400 p-2 rounded-md bg-green-500 hover:bg-green-600">
          + Novo Documento
        </DialogTrigger>
        <DialogContent className="max-w-lg mx-auto">
          <DialogHeader>
            <DialogTitle>Criar novo documento</DialogTitle>
            <DialogDescription>
              Insira os dados necessários para criar o documento.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Origem do documento
              </label>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                <option value="">Selecione a origem</option>
                <option value="categoria1">Origem 1</option>
                <option value="categoria2">Origem 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo do documento
              </label>
              <select
                value={type}
                onChange={handleTypeChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                <option value="">Selecione um Tipo</option>
                <option value="tipo1">Tipo 1</option>
                <option value="tipo2">Tipo 2</option>
              </select>
            </div>
          </div>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="mt-4 p-4 py-16 flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-center"
          >
            <FileUp className="text-green-500 mb-2" />
            Arraste e solte o documento aqui
            <div className="mt-4">
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 cursor-pointer"
              >
                Procurar Documento
              </label>
            </div>
            <span className="text-gray-400 mt-2">tamanho max: 10mb</span>
          </div>
          <div className="mt-4 flex flex-col gap-y-2 justify-center">
          <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600">
              Adicionar 
            </button>
            <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Cancelar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Documents;


