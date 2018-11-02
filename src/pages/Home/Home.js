import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer"

class Home extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res => 
                this.setState({ articles: res.data, title: "", date: "", url: ""})
            )
            .catch(err => console.log(err));
    };

    handleSaveArticle = event => {
        API.saveArticle({
            title: this.state.title,
            date: this.state.date,
            url: this.state.url
        })
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleDeleteSavedArticle = id => {
        API.handleDeleteSavedArticle(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
<div>
    <Container>

         {this.state.articles.map(article => (
            <Link to={"/articles/" + article._id}>
                <ul>{article.title} {article.date} {article.url}</ul>
            </Link>
            ))}
        <Footer/>
    </Container>
   
</div>
        );
    }

}

export default Home;