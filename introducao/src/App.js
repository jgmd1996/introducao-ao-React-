import './App.css';
import JSX from './jsx';
import Prop1 from './props/Props1';
import Pessoa from './props/Pessoa';

function App() {

  const nome = "Passando para a props como um variavel" 
  return (
    <div>
    <JSX />
    <Prop1 nome="João gabriel"/>
    <Prop1 nome="Pedro"/>
    <Prop1 nome={nome}/>
    <br></br>
    <Pessoa 
    nome="joão gabriel"
    idade="26"
    profissao="programador"
    sexo="masculino"
    />
    <br></br>
    <Pessoa
    nome="pedro"
    idade="22"
    profissao="programador"
    sexo="masculino"
    />
    </div>
  );
}

export default App;
