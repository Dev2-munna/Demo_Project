import React, {useState} from 'react';
import '../navbar.css'
import Image from "./mitali-int-logo.jpg"

function Navbar(props) {
    const[active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === 'nav__menu' ? setActive("nav__menu nav__active") : setActive("nav__menu");
   // togglerIcon
   toggleIcon === 'nav__toggler' ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
    };


    return (
        <nav className="nav">
            <a href="#" className="nav__brand"> <img className='image' src={Image} alt="Mitali" /> </a>
            <ul className={active}>
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Who we are</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Service</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Gallery</a></li>
                <li className="nav__item"><a href="#" className="nav__link">contact</a></li>
                <li className="nav__item"><a href="#" className="nav__link"><button className='btn'>Apply Now</button></a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;