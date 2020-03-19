import React from 'react';

const GnomeFilter = (props) => {

    const {text} = props.state;
    const {gnome } = props.gnome;

    const onTextChange = (e) => {
        //console.log(e.target.value);
        props.setTextFilter(e.target.value);
    }; 

    return (
  
        <div className="gnome-form__input">
        <input
          type="text"
          className="gnome-form__input-text"
          placeholder="Try finding some gnome"
          disabled={ false}
          value={text}
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = "Try finding some gnome"} 
          onChange={onTextChange}
        />
        <button className="gnome-form__button">
        <svg className="gnome-form__icon">
          <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
        </button>

        </div>
    );
};

export default GnomeFilter;