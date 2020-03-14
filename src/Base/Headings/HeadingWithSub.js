import React from 'react'
import '../../scss/heading_with_sub.scss'
export default function HeadingWithSub(props) {
      return (
            <div className='heading_with_sub'>
                 {props.children}
            </div>
      )
}
