import React, { Component } from 'react';
import API from "./utils/API";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {

  state = {
    topic: "",
    startDate: "",
    endDate: ""
  };

formSubmit = event => {
  event.preventDefault();

  const searchParams ={
    query: this.state.topic,
    start_date: this.state.startDate,
    end_date: this.state.endDate
  }

  API.search(searchParams)
  .then(results => {
    const articles = results.data.response.docs;
articles.forEach(article => {

  const headline = article.headline.main;
  const date = article.pub_date;
  const url = article.web_url;
  const snippet = article.snippet;

})


  })
  
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};



  render() {
    return (
     
      <div className="App">
      <Navbar/>
          <SearchForm
          formSubmit = {this.formSubmit}
          handleInputChange = {this.handleInputChange}
          />
      <Footer/>
      </div>
    );
  }
}

export default App;
