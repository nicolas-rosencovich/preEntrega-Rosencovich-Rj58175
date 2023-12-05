import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget.jsx';

import estilos from './navbar.module.css';

const Navbar = () => {
  const [activeOption, setActiveOption] = useState('');

  const handleNavLinkClick = (category) => {
    setActiveOption(category);
  };

  return (
    <nav>
      <Link to="/">
        <h3 className={estilos.tituloNavbar}>The Music Store</h3>
      </Link>

      <div className="categories">
        <Link
          to="/category/guitarra"
          className={activeOption === 'guitarra' ? estilos.activeOption : estilos.option}
          onClick={() => handleNavLinkClick('guitarra')}
        >
          Guitarras
        </Link>

        <Link
          to="/category/bajo"
          className={activeOption === 'bajo' ? estilos.activeOption : estilos.option}
          onClick={() => handleNavLinkClick('bajo')}
        >
          Bajos
        </Link>

        <Link
          to="/category/saxo"
          className={activeOption === 'saxo' ? estilos.activeOption : estilos.option}
          onClick={() => handleNavLinkClick('saxo')}
        >
          Saxos
        </Link>
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;