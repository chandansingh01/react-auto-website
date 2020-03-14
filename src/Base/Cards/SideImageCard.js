import React from 'react';
import '../../scss/cards.scss';

export default function SideImageCard(props) {
      return (
            <div className='side-image-card'>
                  <div className='demo-image'>
                  </div>
                  <div className='card-content'>
                  <h3>{props.heading}</h3>
                  <h4>{props.subHeading}</h4>
                  </div>
            </div>
      )
}
