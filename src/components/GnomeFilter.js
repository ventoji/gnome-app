import React from 'react';
import SvgIcon from './SvgIcon';

const GnomeFilter = ({text, setTextFilter}) => {

    const onTextChange = (e) => {
        setTextFilter(e.target.value);
    }; 

    return (
  
        <div className="gnome-form__input">
          <input
            type="text"
            className="gnome-form__input-text"
            placeholder="Try finding some gnome"
            disabled={ false}
            value={text}
            onFocus={(e) => e.target.placeholder = ''} 
            onBlur={(e) => e.target.placeholder = 'Try finding some gnome'} 
            onChange={onTextChange}
          />
          <button className="gnome-form__button">
          <SvgIcon svgClass="gnome-form__icon" svgName="img/sprite.svg#icon-magnifying-glass" />
          </button>

        </div>
    );
};

export default GnomeFilter;