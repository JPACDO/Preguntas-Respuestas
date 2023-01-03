import { useEffect, useState } from "react";

export const Opciones = ({ data, onSelect, selected }) => {



    const seleccion = (event) => {
        // console.log(data.options)
        const id = event.currentTarget.id
        onSelect(id);
    };




    return (

        <div id="opciones">
            {
                Object.keys(data.options).map((key, index) => (
              
                    <div
                        key={key}
                        id={key}
                        className={`opcion ${selected === key ? 'selected' : ''}`}
                        onClick={seleccion}
                    >
                        <div className="num_option"><p className="num_txt"> {index + 1}</p></div>
                        <div className="text_option">{data.options[key]} </div>
                    </div>

                ))
            }

            {/* <div 
        key={'a'}
        id='a'
        className={`opcion ${selected === 'a' ? 'selected' : ''}`}
        onClick={seleccion}
    >
        <div className="num_option"><p> 1</p></div>
        <div>opcion</div>
    </div>

    <div 
        key={'b'}
        id='b'
        className={`opcion ${selected === 'b'  ? 'selected' : ''}`}
        onClick={seleccion}
    >
        <div className="num_option"><p> 2</p></div>
        <div>opcion</div>
    </div>

    <div 
        key={'c'}
        id='c'
        className={`opcion ${selected === 'c'  ? 'selected' : ''}`}
        onClick={seleccion}
    >
        <div className="num_option"><p> 3</p></div>
        <div>opcion</div>
    </div> */}

        </div>
    )
}
