import React from "react";
import "./SearchForm.css";

const SearchForm = props => {
  return (
    <div className="container">
      <form id="searchForm">
        <div className="form-row">
          <div id="search-term" className="form-group col-md-12">
            <label for="Search Topic" />
            <input
              type="search"
              className="form-control"
              name="topic"
              placeholder="Search Term"
              onChange={props.handleInputChange}
            />
          </div>
        </div>

        <div className="form-row align-items-center">
          <div id="begin-year" className="form-group col-md-6">
            <label for="Begin Year" />
            <input
              type="search"
              className="form-control"
              name="startDate"
              placeholder="Start Year"
              onChange={props.handleInputChange}
            />
          </div>

          <div id="end-year" className="form-group col-md-6">
            <label for="End Year" />
            <input
              type="search"
              className="form-control"
              name="endDate"
              placeholder="End Year"
              onChange={props.handleInputChange}
            />
          </div>
        </div>
      </form>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.formSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchForm;
