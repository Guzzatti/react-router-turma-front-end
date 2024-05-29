import { Link } from "react-router-dom";

export default function Produtos() {
  const produtos = [
    { id: 1, nome: "Mouse" },
    { id: 2, nome: "Teclado" },
    { id: 3, nome: "Pen Drive (não fumem)" },
    { id: 4, nome: "Monitor" },
  ];

  return (
    <div>
      <ul className="space-y-3">
        {produtos.map(produto => (
          <li key={produto.id}>
            <Link to={`/produto/${produto.id}`} className="text-lg font-bold hover:text-green-500">
              {produto.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
