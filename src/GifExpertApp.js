import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['Big Chungus']);

    //funcion para agregar un nuevo elemento al array
    //Se crea un nuevo estado, NO ES ASÍ
    //setCategories('HunterxHunter');
    
    //Es necesario usar el operador spread para mantener las categorias anteriores y agregar una nueva
    //setCategories([...categories,'HunterxHunter']);
    
    //
    // const handleAdd = () =>{
    //     setCategories(cats => [...cats,'HunterXHunter']);

    //     console.log(categories);
    // }
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
