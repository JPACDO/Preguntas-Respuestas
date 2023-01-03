import { useEffect, useState } from "react";
import { getDatas } from "../helpers/getDatas";

export const useFetchDatas = ( direccion='' ) => {

    const [url, setUrl] = useState(direccion)
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
      setIsLoading(true)
       const newDatos = await getDatas( url );
       setDatos(newDatos);
       setIsLoading(false);
       console.log('actualizado')
       console.log(newDatos)
    };
    

    useEffect( () => {
        getData();       
    },[url] )


    const reloadData = () => {
        getData();
    };
    

  return {
    datos, //es igual images: images,
    isLoading, //isLoading: true
    setUrl,
    reloadData
  }

}
