import React, { Component } from "react";
import API from "../../utils/API";
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
     };

    formSubmit = event => {
        event.preventDefault();
        API.search(this.state.topic, this.state.startDate, this.state.endDate, this.state.snippet)
        .then(res => {
          this.setState ({articles: res.data.response.docs})
          console.log(res.data);    
      })
      .catch(error => console.log(error));          
         
    }

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
            <div className="container-fluid">              
                <SearchForm
                    formSubmit = {this.formSubmit}
                    handleInputChange = {this.handleInputChange}
                />
                               
                <div className="row">
                <div className="col md-6">

                {this.state.articles.map((article, i) =>(

                <div key= {i} className="card">
                <h5 className="card-header">{article.headline.main}</h5>
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
                  
            );
        }
}

export default Home;