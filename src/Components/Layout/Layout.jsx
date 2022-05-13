import React from "react";
import Auxe from "../../hoc/Auxe";
import './Layout.css'
export default function Layout(props) {
  return (
    <Auxe>
      <div>Toolbar, sidedrap, backdrop</div>

      <main>{props.children}</main>
    </Auxe>
  );
}
