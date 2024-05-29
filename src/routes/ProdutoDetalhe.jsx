import { useParams } from "react-router-dom";

export default function ProdutoDetalhe() {
  const produtos = [
    { id: 1, nome: "Mouse", preco: 10.0 },
    { id: 2, nome: "Teclado", preco: 13.0 },
    { id: 3, nome: "Pen Drive (não fumem)", preco: 17.49 },
    { id: 4, nome: "Monitor", preco: 217.49 },
  ];

  const { id } = useParams();

  const produto = produtos.find(produto => produto.id === Number(id));

  return (
    <div>
      <h2 className="mb-4 text-2xl font-extrabold text-gray-800">{produto.nome}</h2>
      <p className="mb-4 text-lg font-bold text-gray-600">R$ {produto.preco}</p>
    </div>
  );
}
