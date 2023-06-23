import React from 'react'

//Assets
import LogoPrincipal from '../../public/LogoPrincipal.png';
import Perfil from '../../public/Perfil.png';

export const HeaderMenu = ( {title}) => {
  return (
    <div className='headerDiv'>
        <div className='headerLeft'>
            <img src={LogoPrincipal} alt="Logo de Stward Corporation"/>
            <h2>{title}</h2>
        </div>
        <div className='headerRight'>
            <img src={Perfil} alt="Perfil de Usuario"/>
        </div>
    </div>
  )
}
