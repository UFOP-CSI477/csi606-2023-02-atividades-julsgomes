import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface PessoaInterface {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    complemento: string;
    rg: string;
    cidade_id: number;
    tipo_id: string;
    created_at: string;
    updated_at: string;
}

const ListPessoas = () => {

    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {
        api.get('/pessoas').then(response => {
            setPessoas(response.data);
        })
    },[]);

    const handleDeletePessoa = async (id: number) => {
        if(!window.confirm('Deseja realmente excluir esta pessoa?')) {
            return;
        }
        try {
            await api.delete('/pessoas', {
                data: {
                    id
                }
            });
            alert('Pessoa excluído com sucesso!');
            setPessoas(pessoas.filter(pessoa => pessoa.id !== id));
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir pessoa!');
        }
    }

    return (
        <div>
            <h3>Listagem de pessoas</h3>
            <div>
                <Link to="/pessoas/create">Cadastrar pessoa</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>RG</th>
                        <th>Id Cidade</th>
                        <th>Id Tipo</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        pessoas.map(pessoa => (
                            <tr key={pessoa.id}>
                                <td>{pessoa.id}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.rua}</td>
                                <td>{pessoa.numero}</td>
                                <td>{pessoa.complemento}</td>
                                <td>{pessoa.rg}</td>
                                <td>{pessoa.cidade_id}</td>
                                <td>{pessoa.tipo_id}</td>
                                <td>{pessoa.created_at}</td>
                                <td>{pessoa.updated_at}</td>
                                <td><Link to={`/pessoas/update/${pessoa.id}`}>Atualizar</Link> </td>
                                <td><button onClick={() => {handleDeletePessoa(pessoa.id)}}>Excluir</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPessoas;