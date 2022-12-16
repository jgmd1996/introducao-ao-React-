
import { useState} from 'react';
import ListarClientes from './ListarClientes';

function CadastrarCliente(){

    let [cliente, setCliente] = useState(
        {
            nome:'',
            idade:'',
            sexo:'',
            endereco:''
        });
    
    function cadastrar(e){
        e.preventDefault();
        let guardaValorDoVetor = clientes;
        guardaValorDoVetor.push(cliente);
        setClientes(guardaValorDoVetor);
        console.log("Clientes",clientes);
        console.log("Clientes",guardaValorDoVetor);
    }
    
    let [clientes, setClientes] = useState([]);
    //console.log("Cliente",cliente);
  
    return(
        
        <div>
            <h1>cadastro</h1>
            <form>
                <label htmlFor="name"></label>
                <div>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite o seu nome"
                    onChange={(e) => {
                        setCliente({ ...cliente, nome: e.target.value });
                    }}
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite Sua idade"
                    onChange={(e) => {
                        setCliente({ ...cliente, idade: e.target.value });
                    }}
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite seu sexo"
                    onChange={(e) => {
                        setCliente({ ...cliente, sexo: e.target.value });
                    }}
                    />
                </div>

                <div>
                    <input
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite o seu endereço"
                    onChange={(e) => {
                        setCliente({ ...cliente, endereco: e.target.value });
                    }}
                    />
                </div>
               
                <div>
                    <button onClick={cadastrar}>Add</button>
                    {/* <input type="submit" value="cadastrar" /> */}
                </div>
            </form>
            <ListarClientes clientes={clientes} />
        </div>
    )
}

export default CadastrarCliente;

