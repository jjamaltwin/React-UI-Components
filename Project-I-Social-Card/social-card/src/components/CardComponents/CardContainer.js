import React from 'react';
import './Card.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import Footer from '../FooterComponents/Footer';


const CardContainer = () => {
    return  <div className="card-wrapper">
     <a href="https://reactjs.org/"> 
      <HeaderContainer/>
      <CardBanner/>
      <CardContent/>
      <Footer/></a>
    </div>
  
  };
  
  export default CardContainer; 