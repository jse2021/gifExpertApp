import React, { useState } from 'react'
import PropTypes from 'prop-types';

// siempre desestructuro    
export const AddCategory = ({ setCategories }) => {
    // para controlar lo que se hace en el input
    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange =(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    // con trim quito los espacios en blanco
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue,...cats ] );
            setInputValue('');
        }

    }
  
    return (
    
        <form onSubmit={handleSubmit}>
            <h1>Add Category</h1>
            <input
               type="text"
               value={inputValue}
               onChange={handleInputChange}
            />
        </form>
  )

}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

