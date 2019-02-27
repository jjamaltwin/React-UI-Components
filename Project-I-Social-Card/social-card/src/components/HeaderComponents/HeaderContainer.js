import React from 'react';
import './Header.css';
import ImageThumb from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from './HeaderTitle';



const HeaderContainer =() => {
    return<div className="header-wrapper">
    
    <div className="logo-wrapper">
   <ImageThumb/>
    <h1>Lambda School</h1>  
    <HeaderTitle className="date"/>
    <HeaderContent/>
    </div>
    
          </div>
        
       };


export default HeaderContainer;``