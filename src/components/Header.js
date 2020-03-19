import React from 'react';
import { Link } from 'react-router-dom';
import GnomeFilterContainer from '../container/GnomeFilterContainer';

const Header = () => {
 
    return (
        <header className="header">    

        <h1 className="header__title">
          <Link to={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`} > Gnome App </Link> 
        </h1>
        
       
      
        <div className="header__form">
        <GnomeFilterContainer/>
        </div>
        <p className="header__help"> Help</p>
        </header>
    );
};

export default Header;