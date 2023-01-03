import { useEffect, useState } from 'react';
import { useFetchDatas } from '../hooks/useFetchDatas';
import { Boton } from './Boton';
import { Opciones } from './Opciones';
import { Resultados } from './Resultados';

export const Contenido = ( {datos, reload}) => {

    const [index, setIndex] = useState(0)
    const [data, setData] = useState(datos[index])
    const [selected, setSelected] = useState('')
    const [points, setPoints] = useState(0)
    const [finish, setFinish] = useState(false)


    const onSelect = (opcion) => {
        setSelected(opcion);
    };
    

    useEffect(() => {
        setData(datos[index]);
    }, [index])
    
    
    const onClick = () => {
        
        
        if(index < datos.length - 1 ){ 
            
            setSelected('')
            setIndex( index + 1);
            
        }else {
            if(!finish){ 
                setIndex( index + 1);
            }else{
                reload();
                return;
            }
            
            setFinish(true);
        }

        if( data.correctAnswer === selected){ 
            setPoints( points + 1 )
        };   
    }

    return (
        <div className="contenedor">


            {
                finish
                ? <Resultados resultado={(points/datos.length)*100} />
                :
                <div>
                    <div id="page">{index + 1 }/{ datos.length }</div>
                    <div id="pregunta">{data.question}</div>
                   
                    <Opciones data={data} onSelect={onSelect} selected={selected}/>
                    
                
                </div>
            }
            <Boton 
                disabled={selected === ''} 
                onClick={onClick} 
                mensaje= {finish ? 'VOLVER A JUGAR' : 'SIGUIENTE'}
            />

        </div>
    )
}
