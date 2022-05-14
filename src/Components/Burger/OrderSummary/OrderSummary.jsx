import React from 'react'
import Auxe from '../../../hoc/Auxe'
import Button from '../../UI/Button/Button'

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey + 1}>
          <span style={{textTransform:'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      ) 
    }) 
  return (
    <Auxe>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkpoint ?</p>
      <Button clicked={props.purchaseCancel}>CANCEL</Button>
      <Button clicked={props.purchaseContinue}>CONTINUE</Button> 

    </Auxe>
  )
}
