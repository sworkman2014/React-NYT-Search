import React from 'react';
import "./SearchForm.css";
  
const SearchForm = props => {
    return(
        <div className="container">
            
        <form>

        <div id="search-term" className="form-group">
          <label for="Search Topic"></label>
          <input type="search" className="form-control" name="topic" placeholder="Search Term" onChange={props.handleInputChange}/>
        </div>

        <div id="begin-year" className="form-group">         
          <label for="Begin Year"></label>
          <input type="search" className="form-control" name="startDate" placeholder="Start Year" onChange={props.handleInputChange}/>
        </div>

        <div id="end-year" className="form-group">         
          <label for="End Year"></label>
          <input type="search" className="form-control" name="endDate" placeholder="End Year" onChange={props.handleInputChange}/>        
        </div>

        </form> 

        <button type="submit" className="btn btn-primary" onClick={props.formSubmit}>
            Submit
        </button>

        </div>       
    )
}
    
export default SearchForm;