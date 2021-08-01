//TODOS LOS HOOKS COMIENZAN CON "use"

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


//los custom hooks funcionan como functional components
// se le puede agregar efectos, reducers, contextos, etc.
export const useFetchGifs = ( category ) =>{

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    //los efectos no pueden ser async pero adentro si
    useEffect(() => {
        
        getGifs( category )
        .then(imgs =>{

            console.log(imgs)
            setState({
                data: imgs,
                loading: false
            },3000 );
    

        })

    }, [category])


    return state;  //{data:[],loading:true}

}