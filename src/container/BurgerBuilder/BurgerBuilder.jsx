import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import Auxe from "../../hoc/Auxe";

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 1,
    };
  }

  saladPlusHandler = () => {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        salad: this.state.ingredients.salad + 1,
      },
    }));
  };

  meatPlusHandler = () => {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        meat: this.state.ingredients.meat + 1,
      },
    }));
  };

  cheesePlusHandler = () => {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        cheese: this.state.ingredients.cheese + 1,
      },
    }));
  };

  baconPlusHandler = () => {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        bacon: this.state.ingredients.bacon + 1,
      },
    }));
  };



  saladMinusHandler = () => {
    if(this.state.ingredients.salad < 1) {
        return
    } else {
      this.setState((prevState) => ({
        ingredients: {
          ...prevState.ingredients,
          salad: this.state.ingredients.salad - 1,
        },
      }));
    }
};

  meatMinusHandler = () => {
    if(this.state.ingredients.meat < 1) {
        return
    } else {
      this.setState((prevState) => ({
        ingredients: {
          ...prevState.ingredients,
          meat: this.state.ingredients.meat - 1,
        },
      }));
    }
};

cheeseMinusHandler = () => {
  if(this.state.ingredients.cheese < 1) {
      return
  } else {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        cheese: this.state.ingredients.cheese - 1,
      },
    }));
  }
};

baconMinusHandler = () => {
  if(this.state.ingredients.bacon < 1) {
      return
  } else {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        bacon: this.state.ingredients.bacon - 1,
      },
    }));
  }
};


  render() {
    return (
      <Auxe>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          saladPlusHandler={this.saladPlusHandler}
          meatPlusHandler={this.meatPlusHandler}
          cheesePlusHandler={this.cheesePlusHandler}
          baconPlusHandler={this.baconPlusHandler}

          saladMinusHandler={this.saladMinusHandler}
          baconMinusHandler={this.baconMinusHandler}
          meatMinusHandler={this.meatMinusHandler}
          cheeseMinusHandler={this.cheeseMinusHandler}

        />
      </Auxe>
    );
  }
}
