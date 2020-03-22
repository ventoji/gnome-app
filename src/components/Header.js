import React from 'react';
import { Link } from 'react-router-dom';
import GnomeFilterContainer from '../container/GnomeFilterContainer';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { setTextFilter } from '../actions/filter';
import { bindActionCreators } from 'redux';
import SvgIcon from './SvgIcon';
import pathApp from '../urlApp/index';

const Header = ({setTextFilter, history}) => {
 
  const handleGoHome = () => {
    setTextFilter('');
    history.push(`${pathApp}`);
  }
  return (
      <div>
        <h1 className="header__title" onClick={handleGoHome}>
         Gnome App
        </h1>
        <header className="header">    
            <div className="header__logo">
            
              <p className="header__text" onClick={handleGoHome}> 
              <SvgIcon svgClass="icon" svgName="img/sprite.svg#icon-home" />
              HOME </p>
  
            </div>
              
            <div className="header__form">
              <GnomeFilterContainer/>
            </div>
            <Link to={`${pathApp}info-app`} >
            <p className="header__text"> 
            <SvgIcon svgClass="icon" svgName="img/sprite.svg#icon-notification" />
            HELP</p>
            </Link>
          
          </header>
        </div>
    );
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ setTextFilter} , dispatch);

const HeaderContainer = connect(undefined,mapDispatchToProps)(Header)

export default withRouter(HeaderContainer);