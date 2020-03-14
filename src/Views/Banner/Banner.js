import React from 'react';
import TopBar from './TopBar';
import NavBar from '../NavBar/Navbar';
import CarSearch from '../CarSearch/CarSearch';

export default function Banner() {
      return (
            <div className='banner-wrapper'>
                  <TopBar/>
                  <NavBar/>
                  <div className='container-fluid'>  
                   <div className='mobile-banner-text hide-sm'>
                   The best car service awaits you
                   </div> 
                   <div className='banner-form hide'>
                     <div className='search-layout'>
                       <CarSearch/>
                     </div>
                   </div>                
                  </div>
            </div>
      )
}
