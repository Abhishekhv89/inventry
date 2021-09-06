import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    const { name, label, handleCheckBox} = this.props;
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={handleCheckBox}
          id={name}
        ></input>
        <label className="form-check-label" htmlFor={name} style={{float:'left'}}>{label}</label>
      </div>
    );
  }
}

export default CheckBox;
