import React, { Component } from 'react';
import USAMap from "react-usa-map";
 
class MyMap extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  render() {
    return (
      <div className="map">
        <USAMap onClick={this.mapHandler} width = {"100%"} height = {"100vh"} />
      </div>
    );
  }
}
 
export default MyMap;