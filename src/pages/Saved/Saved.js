import React, { Component } from "react";
import API from "../../utils/API";



class Saved extends Component {

    state={
        savedArticles: [],
        title: "",
        url: "",
        snippet: ""
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSavedArticles()
            .then(res => 
                this.setState({ savedArticles: res.data, title: "", url: "", snippet: ""}))
            .catch(err => console.log(err));
    };

    deleteArticle = article => {
        API.deleteSavedArticle(article._id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col md-4">

            
            {this.state.savedArticles.map((save, i) =>(

            <div key= {i} className="card">
            <h5 className="card-header">{save.title}</h5>
                <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{save.date}</h6>
                            <p className="card-text">{save.snippet}</p>
                                <button className="btn btn-outline-primary"><a href={save.url} target="_blank" rel="noopener noreferrer">Read</a></button>
                                <button href="#" className="btn btn-outline-danger"  onClick={()=> this.deleteArticle(save)}>Delete</button>
                </div>
            </div>

            ))}

            </div>


            </div>
        </div>
            );
        }


}

export default Saved;