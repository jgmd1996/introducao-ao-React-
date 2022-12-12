import ProoTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
 
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
    }


    //propType e para deixa adicionar somente o valor da propriedade que vc esfecificar ele faz um worning
    Item.propType ={
        marca: ProoTypes.string.isRequired,
        ano_lancamento: ProoTypes.number.isRequired,
    }
    
    // validaçao se canpo foi prenchido ou não 
    Item.defaultProps ={
        marca: 'Falto a marca',
        ano_lancamento: 0,
    }
export default Item;
