import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, type, value, handleChange, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name} style={{float:'left'}}>{label}</label>
        <input
          type={type}
          className="form-control"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
