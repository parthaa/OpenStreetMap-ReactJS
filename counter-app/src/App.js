import React from "react";
import CustomMap from "./components/CustomMap";
import NavBar from "./components/NavBar";
import firebase from "./Firebase";

export default class App extends React.Component {
  state = {
    markers: []
  };

  listenForNewPins = () => {
    console.log("listening for new segnalazioni...");
    var ref = firebase.database().ref("segnalazioni");
    ref.on("child_added", function(snapshot) {
      console.log("new value under segnalazioni:");
      console.log("fetched:", snapshot.val());
      console.log("---------------------------------");
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        console.log("CHILD DATA", childData);

        if (typeof childData.luogo === "undefined") {
          console.log("undefined, ignoring...");
        } else {
          this.setState({ markers: [...this.state.markers, childData] });
        }
      });
    });
  };

  componentDidMount() {}

  componentDidUpdate() {
    this.listenForNewPins();
  }

  render() {
    const { markers } = this.state;
    return (
      <div>
        <NavBar />
        <CustomMap markers={markers} />
      </div>
    );
  }
}
