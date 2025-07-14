import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/ui/Header";
import ProjetoDetalhado from "./Pages/ProjetoDetalhado";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhado />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
