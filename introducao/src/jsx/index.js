function JSX() {
const nome = "joao gabriel"

const newNome =nome.toUpperCase()

function som(a, b) {
    return a + b
}

return (
    <div classeName="jsx">
        <h2>Alterando jsx</h2>
        <p>ola, {newNome}</p>
        <p>soma: {som(500, 70)}</p>
    </div>
)
}

export default JSX;