import React, { useRef,useState, useEffect } from "react";
import "./gsap.css";
import { gsap, Power3 } from "gsap";
import { Link, BrowserRouter as Router } from "react-router-dom";

//images
import boy from "./images/boy.webp";
import girl from "./images/girl.webp";

//icons
import { BsArrowRight } from "react-icons/bs";

const Gsap = () => {
  let girlimage = useRef(null);
  let boyimage = useRef(null);
  let title = useRef(null);
  let para = useRef(null);
  let btn = useRef(null);

  const [btnClick, setBtnClick] = useState(false);

  const btn_click=()=>{
    setBtnClick(!btnClick);
  }


  useEffect(() => {
    const titlefirst = title.children[0];
    const titlesecond = title.children[1];
    const titlethird = title.children[2];

    // girl
    gsap.fromTo(
      girlimage,
      1.2,
      { y: 1280, ease: Power3.easeOut },
      { y: 0, ease: Power3.easeOut },
      "start"
    );
    gsap.fromTo(
      girlimage.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      { scale: 1, ease: Power3.easeOut },
      0.2
    );
    //boy
    gsap.fromTo(
      boyimage,
      1.4,
      { y: 1280, ease: Power3.easeOut },
      { y: 0, ease: Power3.easeOut },
      0.2
    );
    gsap.fromTo(
      boyimage.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      { scale: 1, ease: Power3.easeOut },
      0.2
    );
    // title
    gsap.fromTo(
      [titlefirst, titlesecond, titlethird],
      1,
      { y: 44, stagger: 0.3, opacity: 0, ease: Power3.easeOut, delay: 0.9 },
      { y: 0, opacity: 1, delay: 0.9, stagger: 0.3 },
      0.15,
      "start"
    );
    gsap.fromTo(
      para,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      { y: 0, opacity: 1, ease: Power3.easeOut },
      2
    );
    //btn
    gsap.fromTo(
      btn,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      { y: 0, opacity: 1, ease: Power3.easeOut },
      2.6
    );
  });

  useEffect(()=>{
    console.log(btnClick);
    const titlefirst = title.children[0];
    const titlesecond = title.children[1];
    const titlethird = title.children[2];

    if (btnClick == true){
    gsap.fromTo(
      girlimage,
      1.8,
      { y: 0, ease: Power3.easeOut },
      { y: 1280, ease: Power3.easeOut }
     );
    gsap.fromTo(
      boyimage,
      3,
      { y: 0, ease: Power3.easeOut, delay:0.4 },
      { y: 1280, ease: Power3.easeOut, delay:0.4 }
    );
    gsap.fromTo(
      [titlefirst, titlesecond, titlethird],
      1,
      { y: 0, stagger: 0.2, opacity: 1, ease: Power3.easeOut, delay: 0.9 },
      { y: 36, opacity: 0, delay: 0.9, stagger: 0.2 }
    );
    gsap.fromTo(
      para,
      1,
      { y: 0, opacity: 1, ease: Power3.easeOut, delay:1.6 },
      { y: 20, opacity: 0, ease: Power3.easeOut, delay:1.6 }
    );
    gsap.fromTo(
      btn,
      1,
      { y: 0, opacity: 1, ease: Power3.easeOut, delay:2 },
      { y: 20, opacity: 0, ease: Power3.easeOut, delay:2 },
    );
    }

  },[btnClick]);





  

  return (
    <>
      <div className="hero">
        <div className="left" ref={(e) => (title = e)}>
          <div className="left h1">Relieving the burden</div>
          <div className="left h1">of disease caused</div>
          <div className="left h1 last">by behaviors.</div>
          <div className="left text">
            <p ref={(e) => (para = e)}>
              Better treats serious cardiometabolic diseases to
              <br /> transform lives and reduce healthcare utilization
              <br />
              through the use of digital therapeutics.
            </p>
          </div>
          <Router>
          <Link style={{ textDecoration: "none" }} to="/home">
            <button  className="button" ref={(e) => (btn = e)} onClick={btn_click}>
              EXPLORE &nbsp;&nbsp;{" "}
              <span className="arrow">
                <BsArrowRight />
              </span>
            </button>
          </Link>
          </Router>
        </div>

        <div className="right">
          <div className="girl" ref={(e) => (girlimage = e)}>
            <img src={girl} />
          </div>
          <div className="boy" ref={(e) => (boyimage = e)}>
            <img src={boy} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
