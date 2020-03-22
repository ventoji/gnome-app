import React from 'react';
import pathApp from '../urlApp/index';

const SvgIcon = ({svgName, svgClass}) => {
    return (
      <svg className={`${svgClass}`}>
        <use xlinkHref={`${pathApp}${svgName}`}></use>
      </svg>
    );
};

export default SvgIcon;