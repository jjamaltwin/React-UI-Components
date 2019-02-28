import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return  <div className="card-wrapper">
     <a href="https://reactjs.org/"> 
      <HeaderContainer/>
      <CardBanner/>
      <CardContent/></a>
    </div>
  
  };
  
  export default CardContainer; 