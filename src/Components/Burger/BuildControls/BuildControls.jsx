import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

export default function BuildControls(props) {
  return (
    <div className="BuildControls">
      <p className="">Current Price : <strong>{props.price.toFixed(2)}$</strong></p>
      {controls.map((item, i) => (
        <BuildControl
          key={item.label + i}
          label={item.label}
          added={() => props.ingredientAdded(item.type)}
          remove={() => props.ingredientRemove(item.type)}
          disabled={props.disabledInfo[item.type]}
        />
      ))}

      <button className="OrderButton" onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  );
}
