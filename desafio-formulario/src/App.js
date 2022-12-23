import React from 'react';
import Input from './components/Input';
import Boton from './components/Boton';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <Input input={nombre}/>
      
      <Boton pswInput={setPassword} />
    </form>
  );
}

export default App;
