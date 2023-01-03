
import { useEffect, useState } from "react";
import { Cargando } from "./components/Cargando";

import { Contenido } from "./components/Contenido";
import { useFetchDatas } from "./hooks/useFetchDatas"


const urlApìs = [
 'https://desafio-holajunior-production.up.railway.app/api/questions',

]

export const App = () => {

  const [pagina, setPagina] = useState(0)
  
  const { datos,isLoading, setUrl, reloadData } = useFetchDatas(urlApìs[pagina]);

  useEffect(() => {
    setUrl(  urlApìs[pagina] );
  }, [pagina])
  


  const reload = () => {
    if(urlApìs.length === 1){
      reloadData();
      return
    } 
      
    if(pagina === (urlApìs.length - 1)){
      setPagina(0)
    }else{
      setPagina( pagina + 1);
    }
  };
  

  return (
    <div id="tarjeta">

        {isLoading
        ? <Cargando />
        : <Contenido datos={ datos} reload={reload} />}
    </div>
  )
}
