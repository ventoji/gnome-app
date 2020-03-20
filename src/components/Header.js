import React from 'react';
import { Link } from 'react-router-dom';
import GnomeFilterContainer from '../container/GnomeFilterContainer';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { setTextFilter } from '../actions/filter';
import { bindActionCreators } from 'redux';

const Header = ({setTextFilter, history}) => {
 
  const handleGoHome = () => {
    setTextFilter('');
    history.push(`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`);
  }
  return (
      <div>
        <h1 className="header__title" onClick={handleGoHome}>
         Gnome App
        </h1>
        <header className="header">    
            <div className="header__logo">
            
              <p className="header__text" onClick={handleGoHome}> 
              <svg className="icon">
                <use xlinkHref="img/sprite.svg#icon-home"></use>
              </svg> HOME </p>
  
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

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ setTextFilter} , dispatch);

const HeaderContainer = connect(undefined,mapDispatchToProps)(Header)

export default withRouter(HeaderContainer);