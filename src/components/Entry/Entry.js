
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";


import React, { Component } from 'react';
import './Entry.css'; 

class Entry extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        Entered: false
    }

    onClickHandler = () => {
     
    }

  
    render() {
  
 

  if (this.state.Entered === false) {
    return (
      <div>
        <body id = "/entry"> 
        <h1> Entry Page </h1>

        <Link to={routes.LANDING}>
          <button onClick= {this.onClickHandler} type="button">ENTER</button>
        </Link>
        </body>
      </div>
    );
  }
  
  return(<div> </div>) 

}
}


export default Entry;
