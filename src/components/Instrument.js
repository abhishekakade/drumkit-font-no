import React, { Component } from "react";
import clap from "../sounds/drum/clap.wav";
import boom from "../sounds/drum/boom.wav";
import hihat from "../sounds/drum/hihat.wav";
import kick from "../sounds/drum/kick.wav";
import openhat from "../sounds/drum/openhat.wav";
import ride from "../sounds/drum/ride.wav";
import snare from "../sounds/drum/snare.wav";
import tink from "../sounds/drum/tink.wav";
import tom from "../sounds/drum/tom.wav";

import q from "../sounds/piano/q.wav";
import w from "../sounds/piano/w.wav";
import e from "../sounds/piano/e.wav";
import a from "../sounds/piano/a.wav";
import s from "../sounds/piano/s.wav";
import d from "../sounds/piano/d.wav";
import z from "../sounds/piano/z.wav";
import x from "../sounds/piano/x.wav";
import c from "../sounds/piano/c.wav";

const drumCollection = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "clap",
    src: clap
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "boom",
    src: boom
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "hihat",
    src: hihat
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "kick",
    src: kick
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "openhat",
    src: openhat
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "ride",
    src: ride
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "snare",
    src: snare
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "tink",
    src: tink
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "tom",
    src: tom
  }
];

const pianoCollection = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord A",
    src: q
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord B",
    src: w
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord C",
    src: e
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Chord D",
    src: a
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Chord E",
    src: s
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Chord E#",
    src: d
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Chord F",
    src: z
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Chord G",
    src: x
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Chord G#",
    src: c
  }
];

export default class Instrument extends Component {
  render() {
    const { activeInstrument } = this.props;

    let soundsArray = [];

    if (activeInstrument === "Piano") {
      soundsArray = pianoCollection;
    } else if (activeInstrument === "Drumkit") {
      soundsArray = drumCollection;
    }

    const audioElemArray = document.querySelectorAll("audio");
    const spanSoundNames = document.querySelectorAll(".sound-name");

    // Adds src to the audio tags
    audioElemArray.forEach((elem, index) => {
      elem.src = soundsArray[index].src;
    });

    // Adds sound name to the keys
    spanSoundNames.forEach(
      (elem, index) => (elem.textContent = soundsArray[index].id)
    );

    return (
      <div id="drum-machine" style={{ margin: "auto" }}>
        <div data-key="81" className="drum-pad" id="sound1">
          <span className="keyboard-key">Q</span>
          <audio id="Q" className="clip" data-key="81" src={q} />
          <span className="sound-name">Chord A</span>
        </div>

        <div data-key="87" className="drum-pad" id="sound2">
          <span className="keyboard-key">W</span>
          <audio id="W" className="clip" data-key="87" src={w} />
          <span className="sound-name">Chord B</span>
        </div>

        <div data-key="69" className="drum-pad" id="sound3">
          <span className="keyboard-key">E</span>
          <audio id="E" className="clip" data-key="69" src={e} />
          <span className="sound-name">Chord C</span>
        </div>

        <div data-key="65" className="drum-pad" id="sound4">
          <span className="keyboard-key">A</span>
          <audio id="A" className="clip" data-key="65" src={a} />
          <span className="sound-name">Chord D</span>
        </div>

        <div data-key="83" className="drum-pad" id="sound5">
          <span className="keyboard-key">S</span>
          <audio id="S" className="clip" data-key="83" src={s} />
          <span className="sound-name">Chord E</span>
        </div>

        <div data-key="68" className="drum-pad" id="sound6">
          <span className="keyboard-key">D</span>
          <audio id="D" className="clip" data-key="68" src={d} />
          <span className="sound-name">Chord E#</span>
        </div>

        <div data-key="90" className="drum-pad" id="sound7">
          <span className="keyboard-key">Z</span>
          <audio id="Z" className="clip" data-key="90" src={z} />
          <span className="sound-name">Chord F</span>
        </div>

        <div data-key="88" className="drum-pad" id="sound8">
          <span className="keyboard-key">X</span>
          <audio id="X" className="clip" data-key="88" src={x} />
          <span className="sound-name">Chord G</span>
        </div>

        <div data-key="67" className="drum-pad" id="sound9">
          <span className="keyboard-key">C</span>
          <audio id="C" className="clip" data-key="67" src={c} />
          <span className="sound-name">Chord G#</span>
        </div>
      </div>
    );
  }
}
