import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { TipoInterface } from "../tiposSanguineos/ListTipos";
import { CidadeInterface } from "../cidades/ListCidades";

const CreatePessoa = () => {

    const [tipoId, setTipoId] = useState(0);
    const [cidadeId, setCidadeId] = useState(0);
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [rg, setRg] = useState('');
    const navigate = useNavigate();

    const [tipos, setTipos] = useState<TipoInterface[]>([]);
    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        api.get('/tipos').then(response => {
            setTipos(response.data);
        })
    },[]);

    useEffect(() => {
        api.get('/cidades').then(response => {
            setCidades(response.data);
        })
    },[]);

    const handleNewPessoa = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const data = {
            nome,
            rua,
            numero,
            complemento,
            rg,
            tipo_id: tipoId,
            cidade_id: cidadeId
        }

        try{
            await api.post('/pessoas', data);
            alert('Pessoa cadastrado com sucesso!');
            navigate('/pessoas');
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar pessoa!');
        }
    }


    return (
        <div>

            <h3>Cadastro de pessoas: {nome} - {tipoId} - {cidadeId} - {rua} - {numero} - {complemento} - {rg}</h3>

            <form onSubmit={handleNewPessoa}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="tipoId">Tipo sanguíneo</label>
                    <select 
                        name="tipoId" 
                        id="tipoId" 
                        value={tipoId}
                        onChange={e => setTipoId(parseInt(e.target.value))}
                    >
                        <option value="">Selecione um tipo sanguíneo:</option>
                        {tipos.map(tipo => (
                            <option key={tipo.id} value={tipo.id}>{tipo.tipo}</option>
                        ))}
                    </select>


                </div>

                <div>
                    <label htmlFor="cidadeId">Cidade</label>
                    <select 
                        name="cidadeId" 
                        id="cidadeId" 
                        value={cidadeId}
                        onChange={e => setCidadeId(parseInt(e.target.value))}
                    >
                        <option value="">Selecione uma cidade:</option>
                        {cidades.map(cidade => (
                            <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                        ))}
                    </select>

                </div>

                <div>
                    <label htmlFor="rua">Rua</label>
                    <input type="text" name="rua" id="rua" value={rua} onChange={e => setRua(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="numero">Número</label>
                    <input type="text" name="numero" id="numero" value={numero} onChange={e => setNumero(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input type="text" name="complemento" id="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="rg">RG</label>
                    <input type="text" name="rg" id="rg" value={rg} onChange={e => setRg(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                
            </form>
        </div>
    )

}

export default CreatePessoa;