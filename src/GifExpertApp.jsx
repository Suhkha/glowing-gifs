import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['BTS']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    //setCategories([...categories, 'Taylor Swift']); // Opcion 1
    setCategories( cat => [newCategory, ...categories]); // Opcion 2
  }

  return (
    <>
        <h1>GiftExpertApp</h1>
        
        <AddCategory onNewCategory={ onAddCategory } />

        { 
          categories.map((category) => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }
    </>
  )
}
