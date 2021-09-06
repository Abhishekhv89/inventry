import React, { Component } from "react";

class Search extends Component {
  render() {
    const { value, handleSearch, error } = this.props;
    return (
      <React.Fragment>
        <input
          type="text"
          className="form-control m-2"
          name="query"
          onChange={(e) => {
            handleSearch(e.currentTarget.value);
          }}
          value={value}
          placeholder="Enter the name of the Inventory"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </React.Fragment>
    );
  }
}

export default Search;
