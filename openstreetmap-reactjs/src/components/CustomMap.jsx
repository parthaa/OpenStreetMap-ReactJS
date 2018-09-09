import PropTypes from "prop-types";
import React, { Component } from "react";

import {
  Map,
  TileLayer,
  Marker,
  Popup
  // PropTypes as MapPropTypes
} from "react-leaflet";

// const ReactLeaflet = require("react-leaflet");

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);
// MyPopupMarker.propTypes = {
//   children: MapPropTypes.children,
//   position: MapPropTypes.latlng
// };

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: "none" }}>{items}</div>;
};
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired
};

export default class CustomMap extends Component {
  state = {
    lat: 45.6982642,
    lng: 9.6772698,
    zoom: 13,
    markers: []
  };

  constructor() {
    super();
    // const { markers } = this.props;
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    const markers = [
      {
        key: "marker1",
        position: [45.69836455, 9.6472798],
        children: "Lampione rotto"
      },
      {
        key: "marker2",
        position: [45.6980459, 9.6872748],
        children: "Segnalazione: tombino rotto"
      },
      {
        key: "marker3",
        position: [45.69856455, 9.6570798],
        children: "Segnalazione: rumore di notte"
      }
    ];
    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}
