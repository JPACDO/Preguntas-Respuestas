import React from 'react'

export const Resultados = ({resultado}) => {
  return (
    <div >
      <figure>
        <img src="/assets/Food.png" />
      </figure>
      <div className='txt_result_porcent'>
        <p>
            {resultado}%
        </p>
      </div>
      <div className='txt_result'>
        <p>
            Respuestas correctas
        </p>
      </div>
    </div>
  )
}
