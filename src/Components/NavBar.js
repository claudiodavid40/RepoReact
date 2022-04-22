import CarWidget from "./CarWidget"

const NavBar = () => {
  return (
    <div className="header__contenedor">
    <h1 className="header__logo">POSTERPOLISH</h1>
    <nav className="header__nav">
        <a href="#">Remeras</a>
        <a href="#">Talles</a>
        <a href="#">Contacto</a>
        <a href="#"><div className="boton-login">Login</div></a>
        <a href="#"><CarWidget/></a>
    </nav> 
    </div> 
  )
}

export default NavBar