import React from "react";
import Auxe from "../../../hoc/Auxe";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

export default function Modal(props) {
  return (
    <Auxe>
      <Backdrop show={props.show} clicked={props.ModalClose}/>
      <div className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0'
    }}>
      {props.children}
    </div>
    </Auxe>
    
  ) ;
}
