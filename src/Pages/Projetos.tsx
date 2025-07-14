import { Link } from "react-router-dom";

export default function Projetos() {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">MEUS PROJETOS</h2>
      <p className="max-w-2xl mx-auto text-center mb-10">
        Trabalhos realizados por mim e meus colegas na FIAP. Este portfólio é meu primeiro trabalho solo pessoal...
      </p>

      <div className="space-y-12">
        {/* Projeto Porto */}
        <div>
          <h3 className="text-xl font-bold">PORTO</h3>
          <p className="text-sm italic">Pré diagnósticos automobilísticos, precificação e muito mais.</p>
          <Link to="/projetos/porto" className="text-blue-600 underline">Ver projeto completo</Link>
        </div>

        {/* Projeto Água Viva */}
        <div>
          <h3 className="text-xl font-bold">ÁGUA VIVA</h3>
          <p className="text-sm italic">Movimento ecológico com fim de juntar voluntários e gerar experiências.</p>
          <Link to="/projetos/agua-viva" className="text-blue-600 underline">Ver projeto completo</Link>
        </div>

        {/* Projeto Conexão Solidária */}
        <div>
          <h3 className="text-xl font-bold">CONEXÃO SOLIDÁRIA</h3>
          <p className="text-sm italic">Comunicação offline em emergências sem wi-fi ou dados móveis.</p>
          <Link to="/projetos/conexao-solidaria" className="text-blue-600 underline">Ver projeto completo</Link>
        </div>
      </div>
    </div>
  );
}
