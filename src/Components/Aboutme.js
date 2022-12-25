import "./AboutStyles.css";
import abtImg from "../Images/abtImg.jpg";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FcLike } from "react-icons/fc";


const Abtme = () => {


    return (
        <div className="About">
            <div className="left-img">
                <img className="about-img" src={abtImg}
                    alt="About-me" />
            </div>
            <div className="rgt-content">
                <h1>About me</h1>
                <p>Hi I am Vishal Gupta, a Web developer, Software Engineer living in Uttar Pradesh, India. I am a Computer Science Engineer, currently working with awesome folks at <strong><a href="https://www.ltimindtree.com/" target="_blank">LTIMindtree</a></strong>.
                </p>
                <div className="social" >
                    <a href="https://www.instagram.com/v.i.s.h.a.l10" className="insta">
                        <FaInstagram
                            size={30}
                            style={{
                                color: '#fff',
                                marginRight: "1rem"
                            }}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/vishalgupta104" className="LI">
                        <FaLinkedin
                            size={30}
                            style={{
                                color: '#fff',
                                marginRight: "1rem"
                            }}
                        />
                    </a>
                    <a href="https://www.twitter.com/" className="twt">
                        <FaTwitter
                            size={30}
                            style={{
                                color: '#fff',
                                marginRight: "1rem"
                            }}

                        /></a>
                    <a href="mailto:vishalguptaa104@gmail.com" className="em">
                        <FaEnvelope
                            size={30}
                            style={{
                                color: '#fff',
                                marginRight: "1rem"
                            }}

                        />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Abtme;