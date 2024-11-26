import React from 'react';

const SeedButton: React.FC = () => {
  const handleClick = async () => {
    try {
      // Garantir que a URL completa é usada se necessário
      const response = await fetch(`${window.location.origin}/api/documents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: 'Documento 1',
          emitente: 'Emitente 1',
          valor_tributo: 100.0,
          valor_liquido: 900.0,
          tipo: 'Tipo 1',
          createAt: new Date('2024-10-12T00:00:00Z').toISOString(),
          updateAt: new Date('2024-10-12T00:00:00Z').toISOString()
        }),
      });

      if (response.ok) {
        console.log('Dados inseridos com sucesso!');
      } else {
        console.error('Erro ao inserir dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      Inserir Dados
    </button>
  );
};

export default SeedButton;

