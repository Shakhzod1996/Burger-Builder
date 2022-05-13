import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

export default function BuildControls({
  baconPlusHandler,
  saladPlusHandler,
  meatPlusHandler,
  cheesePlusHandler,
  saladMinusHandler,
  cheeseMinusHandler,
  meatMinusHandler,
  baconMinusHandler,

}) {
  return (
    <div className="BuildControls">
      <BuildControl
        key={controls[0].label}
        label={controls[0].label}
        saladPlusHandler={saladPlusHandler}
        saladMinusHandler={saladMinusHandler}
      />

      <BuildControl
        key={controls[1].label}
        label={controls[1].label}
        saladPlusHandler={baconPlusHandler}
        saladMinusHandler={baconMinusHandler}
      />

      <BuildControl
        key={controls[2].label}
        label={controls[2].label}
        saladPlusHandler={meatPlusHandler}
        saladMinusHandler={meatMinusHandler}

      />

      <BuildControl
        key={controls[3].label}
        label={controls[3].label}
        saladPlusHandler={cheesePlusHandler}
        saladMinusHandler={cheeseMinusHandler}
      />
    </div>
  );
}
