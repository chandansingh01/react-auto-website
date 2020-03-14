import React from 'react'


export default function Badge(props) {
      return (
            <span className='badge' 
            style={{ backgroundColor: props.background, color: props.color }}>
            {props.title}
            </span>
      )
}
