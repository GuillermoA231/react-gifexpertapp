import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({category}) => {
    
    const { data:images,  loading } = useFetchGifs( category );

    
    //Custom hooks: extraer logica de un componente y extraerla de tal manera que sea sencillo utilizarlo nuevamente

    //useEffect: Sirve para ejecutar un codigo de manera condicional
    //Esta Cuando se carga el componente por primera vez lanza la petición para obtener los gif
    // y enviarlos a imagenes
    // useEffect(() =>{
    //     getGifs(category)
    //     .then(setImages);
    // }, [category]);
    //si la categoria cambia va a volver a ejecutar useEffect


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p>Loading</p>}

            <div className="card-grid animate__animated animate__flash">
                    {
                        images.map( img =>(
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        ))
                    }
            </div>                                           
        </>
        
        
    )
}
