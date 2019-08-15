// pseudo container component for the application

import React, {
    Component
  } from "react";
  import {
    Navbar,
    NavbarBrand
  } from "reactstrap";
  import DishDetail from "./DishdetailComponent";
  import Menu from "./MenuComponent";
  import {
    DISHES
  } from '../shared/dishes';
  
  class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES,
        selectedDish: null
      }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }
    render() {
        // console.log(this.state.dishes);
      return (
        <div>
          <Navbar dark color="dark">
            <div className="container">
              <NavbarBrand href="/">SweetFusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
          <DishDetail dish= {this.state.dishes.filter(dish => dish.id === this.state.selectedDish)}/>
        </div>
      );
    }
  }
  
  export default Main;