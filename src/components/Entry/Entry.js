import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

import React, { Component } from "react";
import "./Entry.css";
import video from "./video.mp4";


class Entry extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  render() {
    return (
     
     <div className = "entry-body">   

        <div className="background-wrap">
          <video id="video-bg-elm" preload ="auto" autoplay ="true" loop ="loop" muted= "muted">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        

     
        </div>

        <div className = "content"> 
          <h1>  Video background tutorial   </h1> 
          <p> this tutorial shows you how to put a video as a background for your website </p> 
          
          <br /> 
          
          <Link to={routes.LANDING}>
          <button className = "entry-button" onClick={this.onClickHandler} type="button">
            ENTER
          </button>
        </Link>
        
      
      
        </div>
      
    </div> 
    );
  }
}

export default Entry;
