import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface DoacaoInterface {
    id: number;
    pessoa_id: number;
    local_id: number;
    data: string;
    created_at: string;
    updated_at: string;
}

const ListDoacoes = () => {

    const [doacoes, setDoacoes] = useState<DoacaoInterface[]>([]);

    useEffect(() => {
        api.get('/doacoes').then(response => {
            setDoacoes(response.data);
        })
    },[]);

    const handleDeleteDoacoes = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir esta doação?')) {
            return;
        }
        try {
            await api.delete('/doacoes', {
                data: {
                    id
                }
            });
            alert('Doação excluído com sucesso!');
            setDoacoes(doacoes.filter(doacao => doacao.id !== id));
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir doação!');
        }
    }

    return (
        <div>
            <h3>Listagem de doações</h3>
            <div>
                <Link to="/doacoes/create">Cadastrar doação</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Id da pessoa</th>
                        <th>Id do local</th>
                        <th>data</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        doacoes.map(cidade => (
                            <tr key={cidade.id}>
                                <td>{cidade.id}</td>
                                <td>{cidade.pessoa_id}</td>
                                <td>{cidade.local_id}</td>
                                <td>{cidade.data}</td>
                                <td>{cidade.created_at}</td>
                                <td>{cidade.updated_at}</td>
                                <td><Link to={`/doacoes/update/${cidade.id}`}>Atualizar</Link> </td>
                                <td><button onClick={() => {handleDeleteDoacoes(cidade.id)}}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDoacoes;