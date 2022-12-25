import "./HomebgStyle.css";
import React from "react";
import BgImg from "../Images/bgImg.jpg";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Homebg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={BgImg}
                    alt="BackgroundImage" />
            </div>
            <div className="content">
                <p>HI, I'M VISHAL GUPTA</p>
                {/* <h1>Frontend Developer</h1> */}
                {/* <h1><Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Software Engineer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Frontend Developer")
                            .start();
                    }}
                /></h1> */}
                <h1>
                    <Typewriter
                        options={{
                            strings: ['Software Engineer', 'Frontend Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <div>
                    <Link to="/resume"
                        className="btn">
                        Resume
                    </Link>
                    <Link to="/connect"
                        className="btn btn-light">
                        Connect
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homebg;