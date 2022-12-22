import React from 'react';
import {useState} from 'react';

const Input = () => {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const validarPassword = (e) => {
        e.preventDefault();

        if(nombre === '' || password === ''){
            setError(true);
            return
        }
    }

    return (
        <form onChange={validarPassword} >
            <p className='mt-5 ms-5 fs-2'>Probando 'Estado de los Componentes'</p>
        <div className='form-group'>
            <label className='ms-5 fs-6'>Nombre:</label>
            <input className='form-control mt-1 ms-5' placeholder='Nombre' name='Nombre' type='text' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <label className='ms-5 mt-4 fs-6'>Contraseña:</label>
            <input className='form-control mt-1 ms-5' placeholder='Password' name='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className='btn btn-dark mt-3 ms-5' type='submit' disabled={true}>Enviar</button>
        </div>
</form>
  )
}

export default Input