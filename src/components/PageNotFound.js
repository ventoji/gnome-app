import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="not-found">
            <p> It seems the page you are trying to access doesn't exits</p>
            <Link to={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`} > Please come back home </Link> 
        </div>
    );
};

export default PageNotFound;