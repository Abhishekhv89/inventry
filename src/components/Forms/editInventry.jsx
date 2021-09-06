import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class EditInventry extends Form {
  state = {
    data: {
      name: "",
      color: "",
      options: "",
      skuid: "",
      stocks: "",
      isChecked: false,
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    color: Joi.string().required().label("Color"),
    options: Joi.string().required().label("Options"),
    skuid: Joi.string().required().label("Skuid"),
    stocks: this.state.data.isChecked ? Joi.number().required().label("Stocks") : Joi.number().label("Stocks"),
    isChecked: Joi.boolean()
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  handleCheckBox = () => {
    this.state.data.isChecked = !this.state.data.isChecked;
    this.setState({ isChecked: this.state.data.isChecked });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.displayInput("name", "Name")}
          {this.displayInput("color", "Color")}
          {this.displayInput("options", "Options")}
          {this.displayInput("skuid", "Skuid")}
          {this.state.data.isChecked &&
            this.displayInput("stocks", "Stocks", "number")}
          {this.displayCheckBox("unlimited", "Unlimited")}
          {this.displaySubmit("Register")}
        </form>
      </div>
    );
  }
}

export default EditInventry;
