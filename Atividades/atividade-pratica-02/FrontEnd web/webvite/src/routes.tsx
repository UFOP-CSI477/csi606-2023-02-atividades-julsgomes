import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ListEstados from "./components/estados/ListEstados";
import CreateEstado from "./components/estados/CreateEstado";
import UpdateEstado from "./components/estados/UpdateEstado";
import CreateCidade from './components/cidades/CreateCidades';
import UpdateCidade from "./components/cidades/UpdateCidade";
import ListCidades from "./components/cidades/ListCidades";
import ListTipos from "./components/tiposSanguineos/ListTipos";
import CreateTipo from "./components/tiposSanguineos/CreateTipo";
import UpdateTipo from "./components/tiposSanguineos/UpdateTipo";
import ListPessoas from "./components/pessoas/ListPessoas";
import UpdatePessoa from "./components/pessoas/UpdatePessoas";
import CreatePessoa from "./components/pessoas/CreatePessoas";
import ListLocais from "./components/locais/ListLocais";
import CreateLocais from "./components/locais/CreateLocais";
import UpdateLocais from "./components/locais/UpdateLocais";
import ListDoacoes from "./components/doacoes/ListDoacoes";
import CreateDoacoes from "./components/doacoes/CreateDoacoes";
import UpdateDoacoes from "./components/doacoes/UpdateDoacoes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/estados" element={<ListEstados />} />
            <Route path="/estados/create" element={<CreateEstado />} />
            <Route path="/estados/update/:id" element={<UpdateEstado />} />

            <Route path="/cidades" element={<ListCidades />} />
            <Route path="/cidades/create" element={<CreateCidade />} />
            <Route path="/cidades/update/:id" element={<UpdateCidade />} />

            <Route path="/tipos" element={<ListTipos />} />
            <Route path="/tipos/create" element={<CreateTipo />} />
            <Route path="/tipos/update/:id" element={<UpdateTipo />} />

            <Route path="/pessoas" element={<ListPessoas />} />
            <Route path="/pessoas/create" element={<CreatePessoa />} />
            <Route path="/pessoas/update/:id" element={<UpdatePessoa />} />

            <Route path="/locais" element={<ListLocais />} />
            <Route path="/locais/create" element={<CreateLocais />} />
            <Route path="/locais/update/:id" element={<UpdateLocais />} />

            <Route path="/doacoes" element={<ListDoacoes />} />
            <Route path="/doacoes/create" element={<CreateDoacoes />} />
            <Route path="/doacoes/update/:id" element={<UpdateDoacoes />} />

        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;