import React, { useState } from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: "All"
    }
    this.itemsToDisplay = this.props.items.filter((item) => {
      if (this.state.selectedCategory === "All") return true;
  
      return item.category === this.state.selectedCategory;
    }); 
  }

  handleCategoryChange = event => {
    // event.target.value will be the value selected by the user
    this.setState({selectedCategory: event.target.value});
  }

  // we want to filter the items to only display the ones based on the selected category
  
  render() {
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {this.itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
