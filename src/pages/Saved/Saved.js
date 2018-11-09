import React, { Component } from "react";
import API from "../../utils/API";
import SavedNavbar from "../../components/SavedNavbar";
import "./Saved.css"



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
<div>
    <SavedNavbar />
        <div>
            <h1>
            Saved Articles
            </h1>
        </div>
    
    <div className="container-fluid">
        <div className="row">
            <div className="col md-4">
                <div className="card-columns">
                
                {this.state.savedArticles.map((save, i) =>(

                <div key= {i} className="card shadow-lg border-dark mb-3 text-dark bg-light">
                <h5 className="card-header text-white bg-secondary">{save.title}</h5>
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
    </div>
</div>
            );
        }


}

export default Saved;