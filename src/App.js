import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import db from "./firebase.config";

class App extends Component {
  state = {
    isSignedIn: false,
    reservationPresent: false,
    hostel: null,
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      let reservations = {};
      this.setState({ isSignedIn: !!user });
      if (!!user) {
        let response = db.collection("hostelRooms");
        response
          .where("userId", "==", user.uid)
          .get()
          .then((data) => {
            data.docs.forEach((item) => {
              reservations = { ...item.data() };
            });
            if (reservations["userId"]) {
              this.setState({ reservationPresent: true });
              this.setState({ hostel: reservations.hostel });
              this.setState({ roomNumber: reservations.roomNumber });
            } else {
              this.setState({ reservationPresent: false });
              this.setState({ hostel: null });
              this.setState({ roomNumber: null });
            }
          });
      } else {
        this.setState({ reservationPresent: false });
        this.setState({ hostel: null });
        this.setState({ roomNumber: null });
      }
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            {this.state.reservationPresent ? (
              <span>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <div>Hostel No. {this.state.hostel}</div>
                <div>Room No. {this.state.roomNumber}</div>
              </span>
            ) : (
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            )}
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
