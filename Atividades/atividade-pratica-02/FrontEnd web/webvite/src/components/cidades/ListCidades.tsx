import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface CidadeInterface {
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
}

const ListCidades = () => {

    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        api.get('/cidades').then(response => {
            setCidades(response.data);
        })
    },[]);

    const handleDeleteCidade = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir esta cidade?')) {
            return;
        }
        try {
            await api.delete('/cidades', {
                data: {
                    id
                }
            });
            alert('Cidade excluído com sucesso!');
            setCidades(cidades.filter(cidade => cidade.id !== id));
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir cidade!');
        }
    }

    return (
        <div>
            <h3>Listagem de cidades</h3>
            <div>
                <Link to="/cidades/create">Cadastrar cidade</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cidades.map(cidade => (
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.nome}</td>
                                <td>{cidade.estado_id}</td>
                                <td>{cidade.created_at}</td>
                                <td>{cidade.updated_at}</td>
                                <td><Link to={`/cidades/update/${cidade.id}`}>Atualizar</Link> </td>
                                <td><button onClick={() => {handleDeleteCidade(cidade.id)}}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCidades;