import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import MyWork from "./components/myWork";


// Projetos específicos
import ProjetoPorto from "./Pages/ProjetoPorto";
import ProjetoMottu from "./Pages/ProjetoMottu";
import ProjetoConexaoSolidaria from "./Pages/ProjetoConexaoSolidaria";
import ProjetoAguaViva from "./Pages/ProjetoAguaViva";
import ProjetoMarcacaoConsultas from "./Pages/ProjetoMarcacaoConsultas";

// Página genérica
import ProjetoDetalhado from "./Pages/ProjetoDetalhado";

// ...imports
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* segue com suas rotas de projetos */}
          <Route path="/projetos" element={<MyWork />} />
          <Route path="/projetos/porto" element={<ProjetoPorto />} />
          <Route path="/projetos/mottu" element={<ProjetoMottu />} />
          <Route path="/projetos/conexao-solidaria" element={<ProjetoConexaoSolidaria />} />
          <Route path="/projetos/agua-viva" element={<ProjetoAguaViva />} />
          <Route path="/projetos/marcacao-de-consultas-medicas" element={<ProjetoMarcacaoConsultas />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
