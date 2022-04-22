import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GifExpertApp = ()=>{

    const [categories, setcategories] = useState(['One Punch','Samurai IX','Dragon Ball'])    
    const agrego = 'marvel';
    const handleAdd = (e) =>{
        // mantengo el array y agrego un nuevo elemento a lo ultimo
        setcategories([...categories,agrego]);
        // agrego un elemento al primero orden
        // setcategories([agrego,...categories]);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category=>{
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
export default GifExpertApp;