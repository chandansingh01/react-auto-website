import React from 'react';
import '../../scss/select.scss';
export default function Select(props) {
      return (
            <select defaultValue='' className="select-css">
                  {props.children}
            </select>
      )
}
