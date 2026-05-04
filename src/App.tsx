import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import MyWork from "./components/myWork";
import ScrollToTop from "./components/ScrollToTop";

import ProjetoPorto from "./Pages/ProjetoPorto";
import ProjetoMottu from "./Pages/ProjetoMottu";
import ProjetoAguaViva from "./Pages/ProjetoAguaViva";
import ProjetoMarcacaoConsultas from "./Pages/ProjetoMarcacaoConsultas";
import ProjetoDetalhado from "./Pages/ProjetoDetalhado";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <div className="bg-ink-900 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<MyWork />} />
          <Route path="/projetos/porto" element={<ProjetoPorto />} />
          <Route path="/projetos/mottu" element={<ProjetoMottu />} />
          <Route path="/projetos/agua-viva" element={<ProjetoAguaViva />} />
          <Route path="/projetos/marcacao-de-consultas-medicas" element={<ProjetoMarcacaoConsultas />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
