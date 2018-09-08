import React from "react";
import Map from "./components/Map";
import NavBar from "./components/NavBar";

export default class App extends React.Component {
  state = { markerPosition: { lat: 45.696, lng: 9.6672 } };
  moveMarker = () => {
    const { lat, lng } = this.state.markerPosition;
    this.setState({
      markerPosition: {
        lat: lat + 0.0001,
        lng: lng + 0.0001
      }
    });
  };
  render() {
    const { markerPosition } = this.state;
    return (
      <div>
        <NavBar />
        <Map markerPosition={markerPosition} />
      </div>
    );
  }
}
