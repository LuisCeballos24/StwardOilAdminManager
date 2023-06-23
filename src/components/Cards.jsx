import React from 'react'

export const Cards = ( {title, img, alt}) => {
  return (
    <div className='card'>
        <img src={img} alt={alt} />
        <h3>{title}</h3>
    </div>
  )
}
