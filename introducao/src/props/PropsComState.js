import { useState } from "react";

function PropsComState({nome, idade, profissao, sexo}) {

   let pessoa = [nome,idade,sexo,profissao];
 
    return (
        <>
            <p>nome: {nome="joao gabriel"}</p>
            
        </>
    )
    }
    
export default PropsComState;


// function PropsComState(props) {


//     const [arroz, setNome] = useState("joao gabriel")
 
//     return (
//         <div classeName="Props">
//             <p>Nome: {props.nome={arroz}}</p>
//             <p>Idade: {props.idade}</p>
//             <p>Profissao: {props.profissao}</p>
//             <p>Sexo: {props.sexo}</p>
            
//         </div>
//     )
//     }
    
//     export default PropsComState;