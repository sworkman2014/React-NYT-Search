import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Container.css";


class Container extends Component {

_onReady = (event) => {

};

_onEnd = (event) => {
    event.target.playVideo();
};

render() {
    
    const videoOptions = { // https://developers.google.com/youtube/player_parameters
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0
        }
    };


    return (
        <div className="video-background">
        <div className="video-foreground">
        <YouTube
        videoId="v=yGEOXfRfLAo"
        opts={videoOptions}
        className="video-iframe"
        onReady={this._onReady}
        onEnd={this._onEnd}
        />
        </div>
        </div>
    )
}

}

export default Container;