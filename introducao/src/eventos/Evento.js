function Evento({numero}) {
    function meuEvento(){
        console.log(`Fui ativado! ${numero}`)
    }
 
    return (
        <>
            <p>Click para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
    }

export default Evento;
