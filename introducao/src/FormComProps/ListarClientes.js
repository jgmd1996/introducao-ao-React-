import { useEffect,useState } from "react";

function ListarClientes({clientes}){

 
    let [atualizar, setAtualizar] = useState([]);

    useEffect(() => {
        setAtualizar(clientes);
      }, [clientes])

    return(     
        <div>
            {atualizar.map(cliente => 
            <span>
                <table>
                    <th>Nome</th>
                    <tr style={{border: "1px solid"}}>{cliente.nome}</tr>
                    <th>Idade</th>
                    <tr style={{border: "1px solid"}}>{cliente.idade}</tr>
                    <th>Sexo</th>
                    <tr style={{border: "1px solid"}}>{cliente.sexo}</tr>
                    <th>Endereco</th>
                    <tr style={{border: "1px solid"}}>{cliente.endereco}</tr>
                </table>
                {cliente.nome},{cliente.idade}
            </span>)}
        </div>
    )
}

export default ListarClientes;

// {itens.map(item => {                  
//     return <tr style={{border: "1px solid"}}>
//         <td style={{border: "1px solid"}}>{item.login}</td>
//         <td style={{border: "1px solid"}}>{item.id}</td>
//         <td style={{border: "1px solid"}}>{item.node_id}</td>
//         <td><img width={"100"} height={"100"} src={item.avatar_url}/></td>
//         <td style={{border: "1px solid"}}>{item.gravatar_id}</td>
//         <td style={{border: "1px solid"}}>{item.url}</td>
//         <td style={{border: "1px solid"}}>{item.html_url}</td>
//         <td style={{border: "1px solid"}}>{item.followers_url}</td>
//         <td style={{border: "1px solid"}}>{item.following_url}</td>
//         <td style={{border: "1px solid"}}>{item.gists_url}</td>
//         <td style={{border: "1px solid"}}>{item.starred_url}</td>
//         <td style={{border: "1px solid"}}>{item.subscriptions_url}</td>
//         <td style={{border: "1px solid"}}>{item.organizations_url}</td>
//         <td style={{border: "1px solid"}}>{item.repos_url}</td>
//         <td style={{border: "1px solid"}}>{item.events_url}</td>
//         <td style={{border: "1px solid"}}>{item.received_events_url}</td>
//         <td style={{border: "1px solid"}}>{item.type}</td>
//         <td style={{border: "1px solid"}}>{item.site_admin}</td>
//     </tr>
// })}