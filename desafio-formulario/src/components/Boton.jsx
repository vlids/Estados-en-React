import React from 'react';

const Boton = ({setPassword}) => {
  return (
    <>
    {setPassword === '252525' ? (
    <button className='btn btn-dark mt-3 ms-5' type='submit'>Enviar</button>
  ) : ('')}
    </>
)
}

export default Boton