import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import "./Home.css"

class Home extends Component {
    state = {
        topic: "",
        startDate: "",
        endDate: "",
        date: "",
        url: "",
        snippet:"",
        articles: [],
    };

    componentDidMount() {
        this.clearForm();
      };
        
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
     };

    formSubmit = event => {
        this.clearForm()
        event.preventDefault()
        API.search(this.state.topic, this.state.startDate, this.state.endDate, this.state.snippet)
        .then(res => {
          this.setState ({articles: res.data.response.docs})
          console.log(res.data);    
      })
      .catch(error => console.log(error));          
         
    }

    clearForm = () => {
        document.getElementById("searchForm").reset(); 
        this.setState({
          topic: "",
          startDate: "",
          endDate: ""
        })
      };

    saveArticle = newData => {
        API.saveArticle({
           "title": newData.headline.main,
           "url": newData.web_url,
           "snippet": newData.snippet
       })
       .then(alert("The Article was Saved."))
       .catch(err => console.log(err));
    };
      
    render() {
        return (
            <div>
                <Navbar />
                    <div className="container-fluid">
                    
                            <div className="row">
                                <div className="col-md-12 center-align">            
                                    <SearchForm
                                        formSubmit = {this.formSubmit}
                                        handleInputChange = {this.handleInputChange}
                                    />
                                </div>          
                            </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 center-align">
                                        {this.state.articles.map((article, i) =>(

                                        <div key= {i} className="card shadow-lg border-dark mb-3 text-dark bg-light">
                                            <h5 className="card-header text-white bg-secondary">{article.headline.main}</h5>
                                                <div className="card-body">                       
                                                    <h6 className="card-subtitle mb-2 text-muted">{article.pub_date}</h6>
                                                        <p className="card-text">{article.snippet}</p>
                                            <button className="btn btn-outline-primary"><a href={article.web_url} target="_blank" rel="noopener noreferrer">Read</a></button>
                                            <button href="#" className="btn btn-outline-success" onClick={()=>this.saveArticle(article)}>Save</button>
                                            </div>
                                        </div>

                                            ))}

                                </div>
                            </div>
                        </div>  

                    </div>
                    
                    </div>
            );
        }
}

export default Home;