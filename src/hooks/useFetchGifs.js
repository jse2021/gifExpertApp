import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
/** 
 * Este codigo es un hooks que se va a encargar de hacer la logica para
 * traer las imagenes y mostrarlas
*/

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
      data:[],
      loading:true
  });

  

     // hace el efecto para que haga la peticion 
     //http cuando cambie la categoria

    useEffect(() => {
    // retorna una promesa de getGifs.
        getGifs(category)
        .then(imgs=>{
            setTimeout(() => {
                console.log(imgs);
                setstate({
                    data:imgs,
                    loading:false
                })
            }, 1000);
        })
      }, [category])

  
  return state;//data:[],loading:true
}


