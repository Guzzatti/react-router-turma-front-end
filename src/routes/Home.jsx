import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">
        Seja bem-vindo ao demo de React Router!
      </h2>

      <p className="my-3.5 text-sm md:text-base">
        Neste demo iremos configurar duas rotas (troca de página) a primeira
        rota essa daqui chamamos de <strong>/</strong> (home).
      </p>

      <p className="my-3.5 text-sm md:text-base">
        Cada tela/rota do <strong>React + React Router</strong> também é um
        component, logo não têm muito mistério gere um component novo e defina a
        rota para "abri-lo" no arquivo <strong>App.jsx</strong>.
      </p>

      <p className="my-3.5 text-sm md:text-base">
        Por fim clique no link abaixo para abrir nossa segunda rota que é a
        <strong>/lista-compras</strong>.
      </p>

      <div className="my-6">
        <Link
          to="/lista-compras"
          className="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
        >
          Abrir lista de compras
        </Link>
      </div>
    </div>
  );
}
