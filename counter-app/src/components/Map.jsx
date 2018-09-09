import React from "react";
const ReactLeaflet = require("react-leaflet");
const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

export default class Map extends React.Component {
  renderMarker() {
    return this.state.markers.map(item => {
      return (
        <Marker position={[item.lat, item.lng]} key={item.commenti}>
          <Popup>{item.commenti}</Popup>
        </Marker>
      );
    });
  }

  render() {
    this.renderMarker();
    const centroBergamo = [45.6982642, 9.6772698];
    return (
      <LeafletMap center={centroBergamo} zoom={13}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    );
  }
}
