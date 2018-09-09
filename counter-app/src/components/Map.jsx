import React from "react";
const ReactLeaflet = require("react-leaflet");
const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 45.6982642,
      lng: 9.6772698,
      zoom: 13
    };
  }

  _renderMarker = () => {
    const { markers } = this.props;
    return markers.map(item => {
      return (
        <Marker position={[item.lat, item.lng]} key={item.popup}>
          <Popup>{item.popup}</Popup>
        </Marker>
      );
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this._renderMarker()}
      </LeafletMap>
    );
  }
}
