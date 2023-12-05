import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Asegurarse de importar Link y NavLink

import estilos from "../Navbar/navbar.module.css";
import CartWidget from "../cartWidget/cartWidget.jsx";



const Navbar = ()=>{
  return(
    <nav>
        <Link  to = '/'>
          <h3 className={estilos.tituloNavbar}> The Music Store</h3>
        </Link>   


        <div className="categories">
<NavLink to = {`/category/guitarra`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Guitarras </NavLink>

<NavLink to = {`/category/bajo`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Bajos </NavLink>

<NavLink to = {`/category/saxo`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Saxos </NavLink>
</div>
<CartWidget/>

        
    </nav>
  )
}


export default Navbar