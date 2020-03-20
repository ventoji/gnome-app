import React from 'react';
import { Link } from 'react-router-dom';
import GnomeFilterContainer from '../container/GnomeFilterContainer';

const Header = () => {
 
  return (
      <div>
        <h1 className="header__title">
          <Link to={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`} > Gnome App </Link> 
        </h1>
        <header className="header">    
            <div className="header__logo">
              <Link to={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`} >
              <p className="header__text"> 
              <svg className="icon">
                <use xlinkHref="img/sprite.svg#icon-home"></use>
              </svg> HOME </p>
              </Link> 
            </div>
              
            <div className="header__form">
              <GnomeFilterContainer/>
            </div>
            <Link to={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY + '/info-app'  : '/info-app'}`} >
            <p className="header__text"> 
            <svg className="icon">
              <use xlinkHref="img/sprite.svg#icon-notification"></use>
            </svg> HELP</p>
            </Link>
          
          </header>
        </div>
    );
};

export default Header;