import "./FooterStyles.css";
import { FcLike } from "react-icons/fc";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="Footer">
            <div className="nameMade">
                <h1>
                    Vishal Gupta
                </h1>
                <p>Made with <FcLike /> in India</p>
            </div>
            <div className="findMe">
                <p>You can find me everywhere</p>
                <div className="social">
                    <a href="https://www.instagram.com/v.i.s.h.a.l10" className="insta">
                        <FaInstagram
                            size={30}
                            style={{ color: "#fff", marginRight: "1rem" }}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/vishalgupta104" className="LI">
                        <FaLinkedin
                            size={30}
                            style={{ color: "#fff", marginRight: "1rem" }}
                        />
                    </a>
                    <a href="https://www.twitter.com/" className="twt">
                        <FaTwitter
                            size={30}
                            style={{ color: "#fff", marginRight: "1rem" }}
                        /></a>
                    <a href="mailto:vishalguptaa104@gmail.com" className="em">
                        <FaEnvelope
                            size={30}
                            style={{ color: "#fff", marginRight: "1rem" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;