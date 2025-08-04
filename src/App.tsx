import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/ui/Header";
import MyWork from "./components/ui/myWork";


import ProjetoPorto from "./Pages/ProjetoPorto";
import ProjetoMottu from "./Pages/ProjetoMottu";
import ProjetoConexaoSolidaria from "./Pages/ProjetoConexaoSolidaria";
import ProjetoAguaViva from "./Pages/ProjetoAguaViva";
import ProjetoMarcacaoConsultas from "./Pages/ProjetoMarcacaoConsultas";

// Página genérica (para projetos restantes, se houver)
import ProjetoDetalhado from "./Pages/ProjetoDetalhado";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<MyWork />} />
        <Route path="/projetos/porto" element={<ProjetoPorto />} />
        <Route path="/projetos/mottu" element={<ProjetoMottu />} />
        <Route path="/projetos/conexao-solidaria" element={<ProjetoConexaoSolidaria />} />
        <Route path="/projetos/agua-viva" element={<ProjetoAguaViva />} />
        <Route path="/projetos/marcacao-de-consultas-medicas" element={<ProjetoMarcacaoConsultas />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhado />} /> {/* genérico */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
