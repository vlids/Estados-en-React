import React from 'react';


const Input = ({setNombre, setPassword}) => {
    return (
    <>
            <p className='mt-5 ms-5 fs-2'>Probando 'Estado de los Componentes'</p>
        <div className='form-group'>
            <label className='ms-5 fs-6'>Nombre:</label>
            <input className='form-control mt-1 ms-5' placeholder='Nombre' type='text' onChange={(e) => setNombre(e.target.value)}/>
            <label className='ms-5 mt-4 fs-6'>Contraseña:</label>
            <input className='form-control mt-1 ms-5' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            
        </div>
    </>
  )
}

export default Input