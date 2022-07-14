import ItemJS from "./Item";
import { useState } from "react";
import { useEffect } from "react";

const ItemListJS = ()=> {
    const productos = [
        {
            name: "juego 1",
            stock: 34,
            priece: 700,
        },
        {
            name: "juego 2",
            stock: 23,
            priece: 455,
        },
        {
            name: "juego 3",
            stock: 46,
            priece: 657,
        },
        {
            name: "juego 4",
            stock: 3,
            priece: 890,
        },
    ]
    let [ItemsS, setItemsS] = useState([]);


    useEffect(()=>{
        let promiseItemRender = new Promise((resolve, reject) =>{
            setTimeout(()=>
              {
                 resolve(productos); 
              }
              ,2000)
             
            })
     
             promiseItemRender.then((respuesta)=>{
        setItemsS(productos);
        console.log(respuesta)
    })
    },[])
    


   return(
    <>
    <ItemJS ItemsS={ItemsS}/>
    </>
   )
  
    
}

export default ItemListJS;

