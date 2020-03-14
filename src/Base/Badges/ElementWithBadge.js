import React from 'react'

export default function ElementWithBadge(props) {
      
      return (
            <div className='element-with-badge' >
                  <span 
                  style={{backgroundColor:props.badgeBackground,
                  color:props.badgeColor}} 
                  className='badge'>{props.badgeTitle}</span>
                  {props.children}
            </div>
      )
}
