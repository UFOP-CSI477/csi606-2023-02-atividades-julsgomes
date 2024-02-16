import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface TipoInterface {
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
    updated_at: string;
}

const ListTipos = () => {

    const [tipos, setTipos] = useState<TipoInterface[]>([]);

    useEffect(() => {
        api.get('/tipos').then(response => {
            setTipos(response.data);
        })
    },[]);

    const handleDeleteTipo = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir este tipo sanguíneo?')) {
            return;
        }
        try {
            await api.delete('/tipos', {
                data: {
                    id
                }
            });
            alert('Tipo sanguíneo excluído com sucesso!');
            setTipos(tipos.filter(tipo => tipo.id !== id));
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir tipo sanguíneo!');
        }
    }

    return (
        <div>
            <h3>Listagem de tipos sanguíneos</h3>
            <div>
                <Link to="/tipos/create">Cadastrar tipo sanguíneo</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tipos.map(tipo => (
                            <tr key={tipo.id}>
                                <td>{tipo.id}</td>
                                <td>{tipo.tipo}</td>
                                <td>{tipo.fator}</td>
                                <td>{tipo.created_at}</td>
                                <td>{tipo.updated_at}</td>
                                <td><Link to={`/tipos/update/${tipo.id}`}>Atualizar</Link> </td>
                                <td><button onClick={() => {handleDeleteTipo(tipo.id)}}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTipos;