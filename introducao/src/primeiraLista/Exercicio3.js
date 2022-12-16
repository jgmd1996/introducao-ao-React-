
import { useState} from 'react';


function Usestate(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuário!");
        console.log(name);
        console.log(password);
    }

    const [name, setName] = useState('valor inicial');
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="name"></label>
                <div>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite o seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="password"></label>
                    <input
                     type="password" 
                     id="password" 
                     name="password" 
                     placeholder="Digite a sua senha" 
                     onChange={(e) => setPassword(e.target.value)}
                     />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Usestate;

//Aqui poderia ser o caso de recuperar de uma api os dados e atualizar eles e manda para o back end
{/* <div>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite o seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div> */}