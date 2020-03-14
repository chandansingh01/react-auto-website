import React from 'react';
import '../../scss/button.scss';

const buttonStyleMapping = {
      primary:'btn btn-primary'
}

export default function Button(props) {
      return (
            <button className={buttonStyleMapping[props.color]} style={props.style} onClick={props.onClick}>{props.children}</button>
      )
}
