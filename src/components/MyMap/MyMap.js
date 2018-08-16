import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MyMap extends React.Component {
  
  
      state = {
      lat: 38,
      lng: -95.713,
      zoom: 4.85,
      NC_Marker: [35.2, -78.638],
      display_State_tag: true, 
      display_NC_tags: false
    }
  

  NC_Onclick_Handler = () => {
    this.setState({
        
        lat: 35.2, 
        lng: -78.638,
        zoom: 7.3,
        display_State_tag: false,
        display_NC_tags: true, 
        NC_Marker: [35.2, -78.638],

        
        

    })
  
  }
  
  
  render () {
    const position = [this.state.lat, this.state.lng]
   //Rendering NC Marker
    if(this.state.display_State_tag === true){
        return(
          <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />


      <Marker onClick = { this.NC_Onclick_Handler } position={this.state.NC_Marker}>
            <Popup >
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>



        ); 
      }
      
    else if (this.state.display_NC_tags === true){
  
      return(
        <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

      {/* Raleigh Marker  */}
       <Marker onClick = { this.NC_Onclick_Handler } position={[35.779, -78.638]} />
          
      {/*End Raleigh Marker  */}

       {/* Fayettville Marker  */}
       <Marker onClick = { this.NC_Onclick_Handler } position={[35.0527, -78.8784]} />
          
      {/*End Fayettville Marker  */}

        {/* Charlotte Marker  */}
        <Marker onClick = { this.NC_Onclick_Handler } position={[35.2271, -80.8431]} />
          
          {/*End of Charlotte Marker */}
         
        {/* Highpoint Marker  */}
        <Marker onClick = { this.NC_Onclick_Handler } position={[35.9557, -80.0053]} />
          
          {/*End of Highpoint */}


          {/* Wilmington Marker  */}
        <Marker onClick = { this.NC_Onclick_Handler } position={[34.2257, -77.9447]} />
          
          {/*End of Wilmington Marker */}
         
         {/* Asheville Marker */}
         <Marker onClick = { this.NC_Onclick_Handler } position={[35.5951, -82.5515]} />
          
          {/*End of Asheville Marker */}

           {/* Boone Marker */}
         <Marker onClick = { this.NC_Onclick_Handler } position={[36.2168, -81.6746]} />
          
          {/*End of Boone Marker */}


            {/* Boone Marker */}
         <Marker onClick = { this.NC_Onclick_Handler } position={[36.2168, -81.6746]} />
          
          {/*End of Boone Marker */}

           {/* Greensville Marker */}
         <Marker onClick = { this.NC_Onclick_Handler } position={[35.6127, -77.3664]} />
          
          {/*End of Greensville Marker */}

            {/* Greensville Marker */}
         <Marker onClick = { this.NC_Onclick_Handler } position={[35.6055, -77.3646]} />
          
          {/*End of Greensville Marker */}
        
      </Map>

      

        
      ); 

    }

    
   
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />






      

    </Map>
      )
  }
}

export default MyMap