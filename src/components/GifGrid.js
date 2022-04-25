import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid =  ({category}) => {
    // useState para controlar el estado de los gifs con setImages
    // const [images, setImages] = useState([]);
 
    const {data:images,loading} = useFetchGifs(category);
 
  return (
      <>
      <h3>{category}</h3>     
      {loading && <p className='card animate__animated animate__flash'>Cargando..</p>}
      
    { <div className="card-grid">
             
        {
            // paso los parametros a GifGridItem
            images.map(img =>(
                <GifGridItem 
                key={img.id}
                // paso todas las propiedades al GifGrid de manera independiente con img
                {...img}/>
                ))
        }
        </div> }
      </>
    
            
        
    
  )
}
