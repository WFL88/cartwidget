import ItemJS from "./Item";

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
    
    return (
        <>
        {productos.map( (producto) => {
            return(
                <>
                 <ItemJS name={producto.name} stock={producto.stock} priece={producto.priece} />
                </>
            )
           
        })}

        </>
    )

    
}

export default ItemListJS;

