import React from "react";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import firebase from "./Firebase";

export default class App extends React.Component {
  state = {
    markers: [
      {
        lat: 45.6982642,
        lng: 9.6772698,
        popup: "sono un popup"
      },
      {
        lat: 43.6982648,
        lng: 9.6772698,
        popup: "sono un ciao"
      }
    ]
  };

  listenForNewPins = () => {
    var self = this;
    console.log("listening for new segnalazioni...");
    var ref = firebase.database().ref("segnalazioni");
    ref.on("child_added", function(snapshot) {
      console.log("new value under segnalazioni:");
      console.log("fetched:", snapshot.val());
      console.log("---------------------------------");
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        console.log("CHILD DATA", childData);

        var test = {};

        if (typeof childData === "undefined") {
          console.log("undefined, ignoring...");
        } else {
          console.log("defined, appending to state array");
          self.setState(prevState => {
            return;
            {
              markers: [...prevState.markers, test];
            }
          });
        }
      });
    });
  };

  render() {
    console.log("rendering app...");
    this.listenForNewPins();
    const { markers } = this.state;
    return (
      <div>
        <NavBar />
        <Map markers={markers} />
      </div>
    );
  }
}
