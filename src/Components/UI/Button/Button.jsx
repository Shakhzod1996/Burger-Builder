import React from 'react';
import './Button.css'

export default function Buutton(props) {
  return (
    <button onClick={props.clicked} className={`${props.children === 'CONTINUE'? 'Button Success':'Button Danger'}`}>{props.children}</button>
  )
}
