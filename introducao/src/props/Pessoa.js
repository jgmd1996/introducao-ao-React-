// function Pessoa(nome, idade, profissao, sexo) {
 
//     return (
//         <div classeName="Props">
//             <p>Nome: {nome}</p>
//             <p>Idade: {idade}</p>
//             <p>profissao: {profissao}</p>
//             <p>Sexo: {sexo}</p>
            
//         </div>
//     )
//     }
    
// export default Pessoa;


function Pessoa(props) {
 
    return (
        <div classeName="Props">
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
            <p>Sexo: {props.sexo}</p>
            
        </div>
    )
    }
    
    export default Pessoa;