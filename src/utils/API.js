import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIPARAM = "?api-key=" + "753f5720889c4bf3b80199c71f4a9288";

const searchParams = {
    query: "",
    start_date: "",
    end_date: ""
}

export default {
    search: function(searchParams) 
    { return axios.get(BASEURL + APIPARAM + "&q=" +  searchParams.query + "&begin_date=" + searchParams.start_date + "0101" + "&end_date=" + searchParams.end_date + "1231");
    },
    getArticles: function() {
        return axios.get("/api/articles");
    },
    getSavedArticles: function(id) {
        return axios.get("/api/articles" + id);
    },
    deleteSavedArticle: function(id) {
        return axios.delete("/api/articles")
    }
};