import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface LocalInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade_id: number;
    created_at: string;
    updated_at: string;
}

const ListLocais = () => {

    const [locais, setLocais] = useState<LocalInterface[]>([]);

    useEffect(() => {
        api.get('/locais').then(response => {
            setLocais(response.data);
        })
    },[]);

    const handleDeleteLocal = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir este local?')) {
            return;
        }
        try {
            await api.delete('/locais', {
                data: {
                    id
                }
            });
            alert('Local excluído com sucesso!');
            setLocais(locais.filter(local => local.id !== id));
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir local!');
        }
    }

    return (
        <div>
            <h3>Listagem de locais</h3>
            <div>
                <Link to="/locais/create">Cadastrar local</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>rua</th>
                        <th>numero</th>
                        <th>complemento</th>
                        <th>cidade_id</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        locais.map(local => (
                            <tr key={local.id}>
                                <td>{local.id}</td>
                                <td>{local.nome}</td>
                                <td>{local.rua}</td>
                                <td>{local.numero}</td>
                                <td>{local.complemento}</td>
                                <td>{local.cidade_id}</td>
                                <td>{local.created_at}</td>
                                <td>{local.updated_at}</td>
                                <td><Link to={`/locais/update/${local.id}`}>Atualizar</Link> </td>
                                <td><button onClick={() => {handleDeleteLocal(local.id)}}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListLocais;