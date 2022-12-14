import React, { useState, useEffect } from "react";
import "./Music.css";

//icons
import {
  BsPlayFill,
  BsFillVolumeUpFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { BsPauseFill } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { ImLoop } from "react-icons/im";

//audio
import audio1 from "./Song/Harehare_Ya.mp3";
import audio2 from "./Song/life_hates_us_now.mp3";
import audio3 from "./Song/Nothing_Stopping_Me.mp3";
import audio4 from "./Song/Red_Swan.mp3";
import audio5 from "./Song/Beleive.mp3";
import audio6 from "./Song/careless.mp3";
import audio7 from "./Song/y.mp3";
import audio8 from "./Song/never.mp3";

//images
import image1 from "./images/harehare_ya.jfif";
import image2 from "./images/life_hates_us_now.jfif";
import image3 from "./images/luffy.jfif";
import image4 from "./images/eren.jpg";
import image5 from "./images/Believe.jpg";
import image6 from "./images/CarelessWhisper.jpg";
import image7 from "./images/yourebeautiful.jpg";
import image8 from "./images/rickroll.jpg";
// import sky from "./sky.jpeg";

const data = [
  {
    audio: audio1,
    image: image1,
    title: "Harehare Ya",
    artist: "ハレハレヤ",
  },
  {
    audio: audio2,
    image: image2,
    title: "Life hates us now",
    artist: "Hatsune Miku",
  },
  {
    audio: audio3,
    image: image3,
    title: "Notthing stopping me",
    artist: "Nightcore",
  },
  {
    audio: audio4,
    image: image4,
    title: "Red Swan",
    artist: "Yoshiki ft. Hyde",
  },
  {
    audio: audio5,
    image: image5,
    title: "Believe",
    artist: "Cher",
  },
  {
    audio: audio6,
    image: image6,
    title: "Careless Whisper",
    artist: "George Michael",
  },
  {
    audio: audio7,
    image: image7,
    title: "You're Beautiful",
    artist: "James Blunt",
  },
  {
    audio: audio8,
    image: image8,
    title: "Never gonna give you",
    artist: "Rick Astley",
  },
];
let val = 0;
let setVal = 0;

const Music = () => {
  const [val, setVal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [vol, setVol] = useState(0.5);

  let time;
  const play = document.querySelector(".play");

  const fn = () => {
    const audio = document.querySelector("audio");
    audio.volume = vol;
    const play = document.querySelector(".play");
    const play2 = document.querySelector(".play2");
    if (play.style.display == "none") {
      play.style.display = "block";
      play2.style.display = "none";
    } else {
      play.style.display = "none";
      play2.style.display = "block";
    }
    // const audio = document.querySelector("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const fnforward = () => {
    if (val >= data.length - 1) {
      setVal(0);
    } else {
      setVal(val + 1);
    }
    const play = document.querySelector(".play");
    const play2 = document.querySelector(".play2");
    play.style.display = "block";
    play2.style.display = "none";
  };
  const fnbackward = () => {
    if (val <= 0) {
      setVal(data.length - 1);
    } else {
      setVal(val - 1)
    }
    const play = document.querySelector(".play");
    const play2 = document.querySelector(".play2");
    play.style.display = "block";
    play2.style.display = "none";
  };
  let c = 0;
  // const left = () => {
  //   // event.preventDeafault();
  //   c=c+1;
  //   const left_icon=document.querySelector(".left_icon");
  //   if(c % 2==0){
  //     left_icon.style.color="#ffffffa6";
  //   }else{
  //     // console.log(c);
  //     left_icon.style.color="red";
  //     const forward =document.querySelector(".forward");
  //     forward.onClick=()=>{
  //       const random =Math.floor(Math.random()*((data.length-1)-0+1)+0);
  //       setVal(random);
  //     }
  //   }
  // };
  let key;

  const slider = () => {
    let dur = document.getElementById("audio").duration;
    let curr = document.getElementById("audio").currentTime;
    setPercentage(Math.round((curr / dur) * 100));

    const audio = document.querySelector("audio");
    audio.onended = () => {
      console.log("ca");
      if (val >= data.length - 1) {
        setVal(0);
      } else {
        setVal(val + 1);
      }
      const play = document.querySelector(".play");
      const play2 = document.querySelector(".play2");
      play.style.display = "block";
      play2.style.display = "none";
    };
  };

  setInterval(() => {
    slider();
  }, 1000);

  const slider2 = () => {
    const slide_val = document.querySelector(".range").value;
    let dur = document.getElementById("audio").duration;
    const audio = document.querySelector("audio");
    audio.currentTime = (slide_val * dur) / 100;
    setPercentage(slide_val);
  };
  const volume = () => {
    const sound = document.querySelector(".volume_slider");
    const audio = document.querySelector("audio");
    audio.volume = sound.value;
    setVol(audio.volume);
    if (audio.volume == 0) {
      const sound = document.querySelector(".sound");
      const mute = document.querySelector(".mute_icon");
      sound.style.display = "none";
      mute.style.display = "block";
    } else {
      const sound = document.querySelector(".sound");
      const mute = document.querySelector(".mute_icon");

      sound.style.display = "block";
      mute.style.display = "none";
    }
  };
  const mute = () => {
    const sound = document.querySelector(".sound");
    const mute = document.querySelector(".mute_icon");
    if (sound.style.display == "none") {
      sound.style.display = "block";
      mute.style.display = "none";
      const audio = document.querySelector("audio");
      audio.volume = 0.2;
      setVol(audio.volume);
    } else {
      sound.style.display = "none";
      mute.style.display = "block";
      const audio = document.querySelector("audio");
      audio.volume = 0;
      setVol(audio.volume);
    }
  };
  return (
    <>
      <div
        className="body"
        style={{ backgroundImage: `url(${data[val].image})` }}
      >
        <div className="container">
          <img src={data[val].image} className="img" />
          <div style={{ display: "flex" }}>
            <div className="left">
              <FaRandom className="left_icon" />
            </div>
            <div className="info">
              {data[val].title}
              <div className="sang"> {data[val].artist} </div>
            </div>
            <div className="right">
              <ImLoop className="right_icon" />
            </div>
          </div>
          <div className="volume_div">
            <BsFillVolumeUpFill className="sound" onClick={mute} />
            <BsVolumeMuteFill className="mute_icon" onClick={mute} />
            <input
              type="range"
              max="1"
              min="0"
              className="volume_slider"
              step="0.05"
              value={vol}
              onChange={volume}
            />
          </div>
          <div className="slide">
            <input
              type="range"
              className="range"
              max="100"
              min="0"
              step="1"
              onChange={slider2}
              value={percentage}
            />
          </div>
          <div className="btns">
            <AiFillBackward className="backward" onClick={fnbackward} />
            <BsPlayFill className="play" onClick={fn} />
            <BsPauseFill className="play2" onClick={fn} />
            <AiFillForward className="forward" onClick={fnforward} />
          </div>
          <audio src={data[val].audio} id="audio" type="audio/mpeg" />
        </div>
      </div>
    </>
  );
};

export default Music;
