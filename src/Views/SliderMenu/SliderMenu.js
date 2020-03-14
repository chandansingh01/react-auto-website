import React from 'react';
import '../../scss/slider_menu.scss';
import '../../scss/navbar.scss';
export default function SliderMenu() {
      return (
            <div className='hide slider_menu'>
                  <div className='arrow'>
                  <i className="fa fa-chevron-left"></i>
            </div>
                  <div className="scrollmenu">
                        
                              <a className="active" href="/some">Our Services</a>
                              <a href="/some" >Car Accessories</a>
                              <a href="/some" >How Go Mechanics Works</a>
                              <a href="/some" >Go Mechanics</a>
                              <a href="/some" >Go Mechanics</a>
                  </div>
                  <div className='arrow'>
                  <i className="fa fa-chevron-right"></i>
            </div>
            </div>
      )
}
