import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import CheckBox from "./checkbox";

class Form extends Component {
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  displayInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        handleChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  displayCheckBox = (name, label) => {
    return (
      <CheckBox
        name={name}
        label={label}
        handleCheckBox={this.handleCheckBox}
      />
    );
  };

  displaySubmit = (label) => {
    return (
      <button
        className="btn btn-small btn-primary m-2"
      >
        {label}
      </button>
    );
  };
}

export default Form;
