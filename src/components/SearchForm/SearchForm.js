import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
  
const SearchForm = (props) => {
    return(
        <div>
            
        <form noValidate autoComplete="off">
        <TextField
          id="search-term"
          label="Search Topic"
          type="search"
          margin="normal"
          variant="outlined"
          onChange={props.handleInputChange}
          name="topic"
        />
         <TextField
          id="begin-year"
          label="Begin Year"
          type="search"
          margin="normal"
          variant="outlined"
          onChange={props.handleInputChange}
          name="startDate"
        />
         <TextField
          id="end-year"
          label="End Year"
          type="search"
          margin="normal"
          variant="outlined"
          onChange={props.handleInputChange}
          name="endDate"
        />
        </form>   
        <Button variant="contained" color="primary" onClick={props.formSubmit}>
            Submit
        </Button>
        </div>
       
    )
}
      

        
    
    

  export default SearchForm;