import React from 'react'
import LogoPrincipal from '../../public/LogoPrincipal.png';

export const InfoStwardCorp = () => {

  function btnToScroll() {
    let scroll = document.getElementById('tituloScroll').offsetTop;
    window.scrollTo({ top: scroll, behavior: 'smooth'}); 
  }

  return (
    <div className="flexCenterColumn infoStwardCorp">
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
