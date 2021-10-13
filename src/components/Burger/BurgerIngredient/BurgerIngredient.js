import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingregient = null;

    switch (props.type) {
      case "bread-bottom":
        ingregient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingregient = (
          <div className={classes.BreadTop}>
            <div className={classes.seeds1}></div>
            <div className={classes.seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingregient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingregient = <div className={classes.Cheese}></div>;
        break;
      case "bacon":
        ingregient = <div className={classes.Bacon}></div>;
        break;
      case "salad":
        ingregient = <div className={classes.Salad}></div>;
        break;
      default:
        ingregient = null;
    }
    return ingregient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
