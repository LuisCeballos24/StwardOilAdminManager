import React from 'react'
import LogoPrincipal from '../../public/LogoPrincipal.png';

export const InfoStwardCorp = () => {

  function btnToScroll() {
    window.scrollTo({ top: 2000, behavior: 'smooth'}); 
  }

  return (
    <div className="infoStwardCorp">
        <img src={LogoPrincipal}/>
        <p>
            Servicios Marítimos en el Canal de Panamá desde 2004. 
            Servicios de Agencia-Lanzamiento - Logística de Entrega 
            de Repuestos - Servicios de Lubricantes y Bunkering
        </p>
        <button className='btnScrollIniciarSesion bottomPrimario' onClick={btnToScroll}>↓  Iniciar Sesión  ↓</button>
    </div>
  )
}
