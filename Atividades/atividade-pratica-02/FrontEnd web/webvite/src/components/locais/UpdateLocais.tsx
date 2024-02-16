import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { LocalInterface } from "./ListLocais";

const UpdateLocais = () => {
    const [nome, setNome] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidadeId, setCidadeId] = useState(0);
    const navigate = useNavigate();

    const [cidades, setCidades] = useState<LocalInterface[]>([]);

    const { id } = useParams();

    useEffect(() => {
        api.get("/cidades").then((response) => {
            setCidades(response.data);
        });
    }, []);

    useEffect(() => {
        api.get(`/locais/${id}`).then((response) => {
            setNome(response.data.nome);
            setCidadeId(response.data.cidade_id);
        });
    }, [id]);

    const handleUpdateLocal = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            id,
            nome,
            rua,
            numero,
            complemento,
            cidade_id: cidadeId,
        };

        try {
            await api.put(`/locais`, data);
            alert("Local atualizada com sucesso!");
            navigate("/locais");
        } catch (error) {
            console.log(error);
            alert("Erro ao atualizar local!");
        }
    };

    return (
        <div>
            <h3>
                Atualização do coleta: {nome} - {rua} - {numero} - {complemento} - {cidadeId}
            </h3>

            <form onSubmit={handleUpdateLocal}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="rua">Rua</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="numero">Número</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cidadeId">Cidade</label>
                    <select
                        name="cidadeId"
                        id="cidadeId"
                        value={cidadeId}
                        onChange={(e) => setCidadeId(parseInt(e.target.value))}
                    >
                        <option value="">Selecione uma cidade:</option>
                        {cidades.map((cidade) => (
                            <option key={cidade.id} value={cidade.id}>
                                {cidade.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default UpdateLocais;
