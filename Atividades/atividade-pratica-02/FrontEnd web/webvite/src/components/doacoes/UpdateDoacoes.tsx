import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { PessoaInterface } from "../pessoas/ListPessoas";
import { LocalInterface } from "../locais/ListLocais";

const UpdateDoacao = () => {

    const [pessoaId, setPessoaId] = useState(0);
    const [localId, setLocalId] = useState(0);
    const [datas, setDatas] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);
    const [locais, setLocais] = useState<LocalInterface[]>([]);

    useEffect(() => {
        api.get('/pessoas').then(response => {
            setPessoas(response.data);
        })
    },[]);

    useEffect(() => {
        api.get('/locais').then(response => {
            setLocais(response.data);
        })
    },[]);

    useEffect(() => {
        if (id) {
            api.get(`/doacoes/${id}`).then(response => {
                setDatas(response.data.nome);
                setPessoaId(response.data.tipo_id);
                setLocalId(response.data.cidade_id);
            }).catch(error => {
                if (error.response && error.response.status === 404) {
                    alert('Doação não encontrada!');
                } else {
                    console.error("Erro ao buscar os dados da doação", error);
                    alert('Erro ao buscar os dados da doação!');
                }
            });
        }
    }, [id]);

    const handleUpdateDoacao = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const data = {
            id: id,
            pessoa_id: pessoaId, 
            local_id: localId,   
            data: datas          
        };
    
        try {
            const response = await api.get(`/doacoes/${id}`);
            if (response.status === 200) {
                await api.put(`/doacoes/${id}`, data);
                alert('Doação atualizada com sucesso!');
                navigate('/doacoes');
            } else {
                alert('Doação não encontrada!');
            }
        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar doação!');
        }
    };


    return (
        <div>

            <h3>Atualização de doação: {datas} - {pessoaId} - {localId}</h3>

            <form onSubmit={handleUpdateDoacao}>
                <div>
                    <label htmlFor="pessoaId">ID da pessoa</label>
                    <select 
                        name="pessoaId" 
                        id="pessoaId" 
                        value={pessoaId}
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
                        value={localId}
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
                    <input type="text" name="data" id="data" value={datas} onChange={e => setDatas(e.target.value)} />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
                
            </form>
        </div>
    )

}

export default UpdateDoacao;