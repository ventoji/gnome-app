import React, { useEffect } from 'react';
import { history } from '../components/App';

const Gnome = (props) => {
    const {
            name='', 
            thumbnail='', 
            age='',
            hair_color='' ,
            height='',
            weight='', 
            professions =[], 
            friends=[]} = props.state;
    const {location, match} = props;

    useEffect(() => {
        if(location.pathname !== match.url) {
            history.push(`${process.env.SUBDIRECTORY}`);
        }
      },[]);

    return (
        <section className="gnome-content">
            <h1 className="gnome__name">{name} </h1>
            <div className="gnome">
                <div className="gnome__photo">
                        <figure className="gnome__photo-container ">
                            <img src={thumbnail} alt=" profile photo" className="gnome__img"/>
                        </figure>
            
                </div>
                <div className="gnome__personal-info">
                    <ul >
                        <li className="gnome__personal-info-item"> <span className="gnome__personal-info-title"> Age: </span> <p className="gnome__personal-info-item"> {age}</p></li>
                        <li className="gnome__personal-info-item"> <span className="gnome__personal-info-title"> height: </span> <p className="gnome__personal-info-item"> {height}</p></li> 
                        <li className="gnome__personal-info-item"> <span className="gnome__personal-info-title"> Weight: </span> <p className="gnome__personal-info-item"> {weight}</p></li>     
                        <li className="gnome__personal-info-item"> <span className="gnome__personal-info-title"> Hair color: </span> <p className="gnome__personal-info-item"> {hair_color}</p></li>  
                    </ul>
    
                    <div className="gnome__professions">
                        <span className="gnome__personal-info-title"> Professions: </span>
                            { professions &&  ( professions.map((p, i) => (
                                <p key={i} className="gnome__personal-info-item gnome__personal-info-item--profession">{ p} </p>
                            )))}
                    </div>
            
                    <div className="gnome__friends">
                        <span className="gnome__personal-info-title"> Friends: </span>
                            { (friends.length === 0 || friends === undefined) ? <p className="gnome__personal-info-title"> No friends </p> : friends.map((f, i) => (
                                <p key={i} className="gnome__personal-info-item gnome__personal-info-item--profession">{ f} </p>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gnome;