import React, { Component } from "react";
import API from "../../utils/API";


class Saved extends Component {

    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col md-12">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"></h5>
                        <h6 className="card-subtitle mb-2 text-muted"></h6>
                            <p className="card-text"></p>
                                <button className="btn btn-outline-primary"><a href="#" target="_blank">Read</a></button>
                                <button href="#" className="btn btn-outline-danger" onClick={this.deleteArticle}>Delete</button>
                </div>
            </div>

            </div>


            </div>
        </div>
            );
        }


}

export default Saved;