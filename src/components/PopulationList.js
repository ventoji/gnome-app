import React, {useState, useEffect, useReducer } from "react";
import { Link } from 'react-router-dom';
// import GnomeFilterContainer from "../container/GnomeFilterContainer";

const PopulationList = (props) => {

    const [url, setUrl] = useState('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    const [loading, setLoading] = useState(false);

    const fetchGnomes = () => {
        setLoading(true);
        fetch(url)
           .then( result => result.json())
           .then( data => {
             const {Brastlewark} = data;
            props.addGnomes(Brastlewark);
            setLoading(false);
           })
           .catch(error => console.log(error));
      };

      useEffect(() => {
        fetchGnomes();
      },[]); 

    const showLoading = () => (
        loading ? <h1 className="population__loading-list"> loading ...</h1> : ""
      );

    const showGnomesFiletered = () => {
    
      return props.gnomes.map((gnome, i) =>  <li className="population__list-item" key={i}>
    
      <p> {gnome.name }     </p>  
      <span> <Link className="population__list-link"  to={`${process.env.SUBDIRECTORY}/gnome/${gnome.id}`} onClick={ () => {
        props.addGnomeItem(gnome);
  
    }}> More Info </Link>  </span> 
  </li> );
    };


    return (
     
      <section className="population-home">

        <div className="population">
      
       { /*<GnomeFilterContainer/>*/ }

  
        {showLoading()}
        
        <div className="population-list">
   
        <ul className="population__gnomes">
      
       
        {showGnomesFiletered()}
        </ul>
     
        </div>
      
        </div>
        </section>
    );
};

export default PopulationList;