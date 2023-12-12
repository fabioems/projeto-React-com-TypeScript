import React from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';

import '../Header/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
