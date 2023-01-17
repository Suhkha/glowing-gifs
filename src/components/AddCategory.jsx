import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanValue = inputValue.trim();
        if(cleanValue.length <= 1) return;

        // setCategories( categories => [...categories, inputValue]);
        onNewCategory(cleanValue);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Search gifs" 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}
