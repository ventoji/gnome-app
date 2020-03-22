import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from './SvgIcon';
import pathApp from '../urlApp/index';

const PopulationList = (props) => {

    const [url, setUrl] = useState('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    const [isLoading, setIsLoading] = useState(false);

    const fetchGnomes = () => {
        setIsLoading(true);
        fetch(url)
           .then( result => result.json())
           .then( data => {
             const {Brastlewark} = data;
            props.addGnomes(Brastlewark);
            setIsLoading(false);
           })
           .catch(error => console.log(error));
      };

      useEffect(() => {
        fetchGnomes();

        return () => {
         // console.log("cleanup");
        };
      },[]); 

    const showLoading = () => (
         isLoading ? <div className="loader">
         <img className="loader__image" src={`${pathApp}img/Spinner-1s-200px.gif`}/>
     </div> : ''
      );

    const showGnomesFiletered = () => {
    
      return props.gnomes.map((gnome, i) =>  <li className="population__list-item" key={i}>
    
      <p> {gnome.name }     </p>  
      <span> <Link className="population__list-link"  to={`${pathApp}gnome/${gnome.id}`} onClick={ () => {
        props.addGnomeItem(gnome);
  
    }}>   
    <SvgIcon svgClass="icon--gnome" svgName="img/sprite.svg#icon-eye" />
      </Link>  </span> 
  </li> );
    };


    return (
     
      <section className="population-home">

        <div className="population">
        
        {showLoading()}

        
        <div className="population-list">
   
        <ul className="population__gnomes">
      
       
        {isLoading ? '' : showGnomesFiletered()}

        </ul>
     
        </div>
      
        </div>
        </section>
    );
};

export default PopulationList;