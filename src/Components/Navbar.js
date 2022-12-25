import "./NavbarStyle.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [Click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!Click);
    }

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    const [changeclr, setChangeClr] = useState(false);
    const chg = () => {
        setChangeClr(!changeclr);
    };

    window.addEventListener("scroll", changeColor);


    return (
        <div className={color ? "Header Header-bg" : "Header"} >
            <Link to="/">
                <h1>VG</h1>
            </Link>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
                <li onClick={chg} className={changeclr ? "activecls" : "bekar"}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/connect">Connect</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>

                {Click ?
                    <FaTimes size={20} style={{ color: "#fff" }} />
                    : <FaBars size={20} style={{ color: "#fff" }} />
                }
            </div>
        </div>
    )
}

export default Navbar;