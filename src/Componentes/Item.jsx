import ContadorJS from "./Contador";

const ItemJS = ( props )=> {
    
    return (
    <>
     {
        props.ItemsS.map(
         (cadaItem) => 
         <>
         <br></br>
         <p>Nombre del juego:{cadaItem.name}</p>
         <p>Precio del juego:{cadaItem.priece}</p>   
         <p>Stock del juego:{cadaItem.stock}</p>
         <ContadorJS />
         <br></br>
         </>     
         
         )
     }
        
    </>
    )
}

export default ItemJS;

