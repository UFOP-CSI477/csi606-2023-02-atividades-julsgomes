import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { LocalInterface } from "../locais/ListLocais";
import { PessoaInterface } from "../pessoas/ListPessoas";

const CreateDoacao = () => {

    const [pessoa_Id, setPessoaId] = useState(0);
    const [local_Id, setLocalId] = useState(0);
    const [datas, setData] = useState('');
    const navigate = useNavigate();

    const [locais, setLocais] = useState<LocalInterface[]>([]);
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {
        api.get('/locais').then(response => {
            setLocais(response.data);
        })
    },[]);

    useEffect(() => {
        api.get('/pessoas').then(response => {
            setPessoas(response.data);
        })
    },[]);



    const handleNewDoacao = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const data = {
            pessoa_id: pessoa_Id,
            local_id: local_Id,
            data: datas
        }

        try{
            await api.post('/doacoes', data);
            alert('Doação cadastrada com sucesso!');
            navigate('/doacoes');
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar doação!');
        }
    }


    return (
        <div>

            <h3>Cadastro de doação: {pessoa_Id} - {local_Id} - {datas}</h3>

            <form onSubmit={handleNewDoacao}>
                <div>
                    <label htmlFor="pessoaId">ID da pessoa</label>
                    <select 
                        name="pessoaId" 
                        id="pessoaId" 
                        value={pessoa_Id}
                        onChange={e => setPessoaId(parseInt(e.target.value))}
                    >
                        <option value="">Selecione uma pessoa:</option>
                        {pessoas.map(pessoa => (
                            <option key={pessoa.id} value={pessoa.id}>{pessoa.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="localId">ID do local</label>
                    <select 
                        name="localId" 
                        id="localId" 
                        value={local_Id}
                        onChange={e => setLocalId(parseInt(e.target.value))}
                    >
                        <option value="">Selecione um local:</option>

                        {locais.map(local => (
                            <option key={local.id} value={local.id}>{local.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="data">Data</label>
                    <input type="text" name="data" id="data" value={datas} onChange={e => setData(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                
            </form>
        </div>
    )

}

export default CreateDoacao;

