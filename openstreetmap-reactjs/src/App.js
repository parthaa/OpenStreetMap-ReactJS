import React from "react";
import CustomMap from "./components/CustomMap";
import NavBar from "./components/NavBar";
import firebase from "./Firebase";

export default class App extends React.Component {
  state = {
    markers: []
  };

  constructor(props) {
    super(props);
    this.state = { markers: null };
    this.onSettingsChanged = this.onSettingsChanged.bind(this);
  }

  onSettingsChanged(data) {
    this.setState({ data: data.val() });
    console.log("data fetched:", data.val());
  }

  componentDidMount() {
    var ref = firebase.database().ref("segnalazioni");
    ref.on("value", this.onSettingsChanged);
  }

  // listenForNewPins() {
  //   console.log("listening for new segnalazioni...");
  //   var ref = firebase.database().ref("segnalazioni");
  //   ref.on("child_added", function(snapshot) {
  //     console.log("new value under segnalazioni:");
  //     console.log("fetched:", snapshot.val());
  //     console.log("---------------------------------");
  //     snapshot.forEach(function(childSnapshot) {
  //       var childData = childSnapshot.val();

  //       if (typeof childData.luogo === "undefined") {
  //         console.log("undefined, ignoring...");
  //       } else {
  //         console.log("Using child data:", childData);
  //         // self.setState({
  //         //   markers: [...this.state.markers, childData]
  //         // });
  //       }
  //     });
  //   });
  // }

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
