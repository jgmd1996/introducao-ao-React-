import './App.css';
import JSX from './jsx';
import Prop1 from './props/Props1';
import Pessoa from './props/Pessoa';
import List from './props/List';
import Evento from './eventos/Evento';
import Form from './eventos/Form';

function App() {

  
  return (
    <div>
      <Evento numero={2}/>
      <Form />
    </div>
  );
}

export default App;
