import "./ResumeStyle.css";
import "./HomebgStyle.css";
import rsm from "../Images/Vishal_Resume.pdf";
import ResImg from "../Images/ResImg.jpg";
import { BsBoxArrowInDown } from "react-icons/bs";


const resumepg = () => {

    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={ResImg}
                    alt="BackgroundImage" />
            </div>
            <div className="content">
                <button className="btn1"><a href={rsm} target="_blank" download="download_resume"><BsBoxArrowInDown /> Download Resume</a></button>
            </div>
        </div>

    )
}

export default resumepg;