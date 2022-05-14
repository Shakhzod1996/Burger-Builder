import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI/Modal/Modal";
import Auxe from "../../hoc/Auxe";

const INGREDIENTS_PRICE = {
  salad: 0.1,
  bacon: 0.4,
  cheese: 0.2,
  meat: 0.8,
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 1,
    purchasable: false,
    purchasing: false,
  };

  ModalClose = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('Done with Order')
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(intKey => {
      return ingredients[intKey]
    }).reduce((sum, el) => {
      return sum+el
    }, 0)

    this.setState({ purchasable: sum > 0 })
  }
  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let updateCount = oldCount + 1;
    let updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;

    let priceAddition = INGREDIENTS_PRICE[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = priceAddition + oldPrice;

    this.updatePurchaseState(updateIngredients)
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });

  };

  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return
    }
    let updateCount = oldCount - 1;
    let updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;

    let priceAddition = INGREDIENTS_PRICE[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - priceAddition;

    this.updatePurchaseState(updateIngredients)
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });

  };

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Auxe>
        <Modal show={this.state.purchasing}
        ModalClose={this.ModalClose}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.ModalClose}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler} />
      </Auxe>
    );
  }
}
