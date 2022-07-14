import ContadorJS from "./Contador";

const ItemJS = ({name, stock, priece})=> {
    return (
        <>
    <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">stock: {stock}</p>
            <p className="card-priece">priece:$ {priece} </p>
            <a href="#" className="btn btn-primary">Detalles</a>
            <br></br>
            <ContadorJS />
        </div>
    </div>
        </>
    )
}

export default ItemJS;

