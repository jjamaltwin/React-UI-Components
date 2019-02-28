import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return <a href="https://reactjs.org/"> <div className="card-wrapper">
      <HeaderContainer/>
      <CardBanner/>
      <CardContent/>
    </div></a>
  
  };
  
  export default CardContainer; 