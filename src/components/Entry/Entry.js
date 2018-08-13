
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";


import React, { Component } from 'react';


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
        <h1> Entry Page </h1>

        <Link to={routes.LANDING}>
          <button onClick= {this.onClickHandler} type="button">ENTER</button>
        </Link>
      </div>
    );
  }
  
  return(<div> </div>) 

}
}


export default Entry;
