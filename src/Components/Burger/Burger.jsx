import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

export default function Burger(props) {

  let transfer = Object.keys(props.ingredients).map(intKey => {
    return [...Array(props.ingredients[intKey])].map((_, i) => {
      return <BurgerIngredient key={intKey + i} type={intKey} />
    })
  }).reduce((arr, ell) => {
    return arr.concat(ell)
  }, [])

  if (transfer.length === 0) {
    transfer = <p>Please start adding Ingredients!</p>
  }
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transfer}
      <BurgerIngredient type='bread-bottom' />

    </div>
  )
}
