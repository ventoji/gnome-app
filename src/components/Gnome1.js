import React from 'react';

const Gnome = (props) => {
    const {name, thumbnail, age, hair_color ,height, weight, professions, friends} = props;

    return (
        <div className="gnome">
        <h1> Personal information</h1>
        <h1 className="gnome__name">
        {name}
        </h1>
        <div className="gnome__photo">
        <img src={thumbnail} alt=" profile photo" className="gnome__img"/>
        </div>
       <div className="gnome__personal-info">
       <p className="gnome__personal-info-item"> {age}</p>
       <p className="gnome__personal-info-item"> {height}</p>
       <p className="gnome__personal-info-item"> {weight}</p>
       <p className="gnome__personal-info-item"> {hair_color}</p>
     
       { professions && professions.map((p, i) => (
            <p key={i} className="gnome__personal-info-item">{ p} </p>
       ))}

       { friends && friends.map((f, i) => (
        <p className="gnome__personal-info-item">{ f} </p>
   ))}

       </div>

            
        </div>
    );
};

export default Gnome;