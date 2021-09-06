import React, { Component } from "react";
import { getInventory } from "../services/fakeInventoryService";
import Edit from "./edit";
import Search from "./search";
import Toggle from "./toggle";
import Joi from "joi-browser";

class Inventory extends Component {
  state = {
    inventories: [],
    searchValue: "",
    errors: {},
  };

  schema = {
    searchValue: Joi.string().required().label("Search Value"),
  };

  componentDidMount = () => {
    const inventories = getInventory();
    this.setState({ inventories });
  };

  handleToggle = (fruit) => {
    const fruits = "Fruits";
    const inventories = [...this.state.inventories];
    inventories.forEach((inventory) => {
      if (inventory.name === fruits) {
        const fruits = [...inventory.details];
        const index = fruits.indexOf(fruit);
        fruits[index].isToggle = !fruits[index].isToggle;
        this.setState({ fruits });
      }
    });
  };

  validateProperty = (value) => {
    const obj = { searchValue: value };
    const { error } = Joi.validate(obj, this.schema);
    return error ? error.details[0].message : null;
  };

  handleSearch = (searchValue) => {
    const errors = {};
    const errorMessage = this.validateProperty(searchValue);
    if (errorMessage) errors["query"] = errorMessage;
    else delete errors["query"];

    this.setState({ searchValue, errors });
  };

  handleClick = () => {
    this.props.history.push('/editInventry');
  };

  render() {
    const { inventories, searchValue } = this.state;
    const fruits = "Fruits";
    const vegetables = "Vegetables";

    let allInventories = inventories;

    allInventories = searchValue
      ? inventories.map((element) => {
          return {
            ...element,
            details: element.details.filter((subElement) =>
              subElement.name
                .toLowerCase()
                .startsWith(searchValue.toLowerCase())
            ),
          };
        })
      : inventories;

    return (
      <React.Fragment>
        <Search
          value={searchValue}
          handleSearch={this.handleSearch}
          error={this.state.errors.query}
        ></Search>
        <div className="accordion m-2" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Vegetables
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Color</th>
                      <th>Options</th>
                      <th>SKU ID</th>
                      <th>Stocks</th>
                    </tr>
                  </thead>
                  {allInventories.map((inventory) => (
                    <tbody key={inventory._id}>
                      {inventory.name === vegetables &&
                        inventory.details.map((sub) => (
                          <tr key={sub._id}>
                            <td>{sub.name}</td>
                            <td>{sub.color}</td>
                            <td>{sub.options}</td>
                            <td>{sub.skuid}</td>
                            <td>{sub.stocks}</td>
                            <td>
                              <Edit handleClick={this.handleClick} />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Fruits
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Color</th>
                      <th>Options</th>
                      <th>SKU ID</th>
                      <th>Stocks</th>
                    </tr>
                  </thead>
                  {allInventories.map((inventory) => (
                    <tbody key={inventory._id}>
                      {inventory.name === fruits &&
                        inventory.details.map((sub) => (
                          <tr key={sub._id}>
                            <td>{sub.name}</td>
                            <td>{sub.color}</td>
                            <td>{sub.options}</td>
                            <td>{sub.skuid}</td>
                            <td>{sub.stocks}</td>
                            <td>
                              <Toggle
                                isToggle={sub.isToggle}
                                handleToggle={() => {
                                  this.handleToggle(sub);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Inventory;
