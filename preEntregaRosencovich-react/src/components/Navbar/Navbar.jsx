
import estilos from "../Navbar/navbar.module.css";

import CartWidget from "../cartWidget/cartWidget.jsx";
export default function Navbar() {
  return (
  
        <div className={estilos.navContainer}>
   
     <nav>
        <h2 className={estilos.tituloNavbar}>
        Lamed Uniformes
    </h2>
            <ul className={estilos.navMenu}>
                 <button className={estilos.navButton}>Inicio</button>
                <button className={estilos.navButton} >Nosotros</button>
                <button className={estilos.navButton} >Catálogo</button>
                <button className={estilos.navButton} >Ser miembro</button>
                <CartWidget/>
            </ul>
            
            
        </nav>
        
</div>
   
  )
}
