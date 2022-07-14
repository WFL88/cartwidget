import { useState } from "react";
import { useEffect } from "react";
import ItemListJS from "./ItemList";

const PromesaJSX = ()=>{
    const condition = true;
    const renderCatalogo = ()=>{
        return <ItemListJS />
    }


    const promesa = new Promise((resolve, reject) =>{
        if(condition){
            setTimeout(()=> resolve(), 2000)
        }
        else{
            setTimeout(()=> reject(), 2000)
        }
    })
    promesa.then(renderCatalogo);

}
export default PromesaJSX;