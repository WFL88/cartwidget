import CartWidget from "./CartWidget";

const NavJS = ()=> {
    return (
        <>
         <nav className="navJS">
        <ul className="ul-nav">
            <li className="li-nav">Home</li>
            <li className="li-nav">Productos</li>
            <li className="li-nav">Servicios</li>
            <li className="li-nav">Contacto</li>
            <CartWidget />
        </ul>
         </nav>
       </>
    )
}

export default NavJS;