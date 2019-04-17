import React, { Component } from "react";
import "./App.css";
import Instrument from "./components/Instrument";
import SwitchInstrument from "./components/SwitchInstrument";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeInstrument: "Piano"
    };
  }

  componentDidMount() {
    const keys = document.querySelectorAll(".drum-pad");

    // To display the name of sound on element with #display
    const displaySoundNameElem = document.querySelector("#display");

    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
      // if (!currentKeySpan) return;
      if (!audio) return; //stop the function from running altogether
      audio.currentTime = 0; //rewind to the start
      audio.play();
      key.classList.add("playing");

      const currentKeySpan = key.querySelector(".sound-name");
      displaySoundNameElem.textContent = currentKeySpan.textContent;
    }

    function playSoundOnClick(e) {
      const audioElem = e.target.querySelector("audio");

      // added pointer-events: none to .drum-pad children so all click events will happen on .drum-pad itself
      if (e.target.classList.contains("drum-pad")) {
        e.target.classList.add("playing");
        audioElem.currentTime = 0;
        audioElem.play();
        displaySoundNameElem.textContent = e.target.querySelector(
          ".sound-name"
        ).textContent;
      }
    }

    function removeTransition(e) {
      if (e.propertyName !== "transform") return; //skip it if its not a transform
      this.classList.remove("playing");
    }

    //now to remove transition after key has played
    //used forEach to loop through ALL the keys properly
    keys.forEach(key =>
      key.addEventListener("transitionend", removeTransition)
    );

    window.addEventListener("keydown", playSound);
    window.addEventListener("click", playSoundOnClick);
  }

  changeActiveInstrument = e => {
    // let switchInstrument = document.getElementById("");
    const pianoIdVar = document.getElementById("pianoId");
    const drumIdVar = document.getElementById("drumId");

    if (e.target.id === "drumId") {
      drumIdVar.classList.remove("disabled-switch");
      pianoIdVar.classList.remove("enabled-switch");
      drumIdVar.classList.add("enabled-switch");
      pianoIdVar.classList.add("disabled-switch");
      this.setState({
        activeInstrument: "Drumkit"
      });
    } else if (e.target.id === "pianoId") {
      pianoIdVar.classList.remove("disabled-switch");
      drumIdVar.classList.remove("enabled-switch");
      pianoIdVar.classList.add("enabled-switch");
      drumIdVar.classList.add("disabled-switch");
      this.setState({
        activeInstrument: "Piano"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 id="heading">{this.state.activeInstrument}</h1>
        <div className="container">
          <Instrument activeInstrument={this.state.activeInstrument} />
          <SwitchInstrument changeInstrument={this.changeActiveInstrument} />
        </div>
      </div>
    );
  }
}

export default App;
