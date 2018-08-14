import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

import React, { Component } from "react";
import "./Entry.css";
import video from "./video.mp4";
import Typing from 'react-typing-animation';  



class Entry extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  
  

  render() {
  
    
    return (
     
     <div className = "entry-body">   

        <div className="background-wrap">
          <video id="video-bg-elm" preload ="auto" autoPlay ="true" loop ="loop" muted= "muted">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
     
        </div>

        <div className = "content"> 
          <h1>  Local EDM, A place to:</h1> 
          <div className ="paragraph"> <Typing speed = {70} loop = {true} delay ={500}> 
            
            
            
            <span>
             Listen to Artists in Your Area. 
            </span>

            <Typing.Backspace count = {31} delay = {500} />            
            <Typing.Delay ms = {0} />
            
            <span>
             Upload Your Own Music. 
            </span>   
            <Typing.Backspace count = {22} delay = {500} />          
            <Typing.Delay ms = {0} />
            
            <span> 
              Create a Profile and Save Music to Playlists.  
            </span>
            <Typing.Backspace count = {45} delay = {500} /> 
            <Typing.Delay ms = {0} />

            <span> 
              Get Your Music Heard and More! 
            </span>
            
            <Typing.Backspace count = {30} delay = {500} /> 
            <Typing.Reset count={2} delay={900} />
            </Typing>
            
            
         
            
            
             </div> 
          
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
