import React, {useState} from 'react'
import './Header.css'
import logo from '../../assets/images/Frame-26863.png'
import { IoClose, IoMenu } from "react-icons/io5";


const Header = () =>{
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
    return (
        <div className="header">
            <div className='header-components'> {/* navbar-container*/}
                <div className='logo'><a href="#"><img src={logo}/></a></div>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
                    <ul className='header-right'>
                    <li><a href="#home">Crypto Taxes</a></li>
                    <li><a href="#contact">Free Tools</a></li>
                    <li><a href="#about">Resource Centre</a></li>
                    <li><button className="getStarted-Button" href="#about">Get Started</button></li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>                
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </div>
        </div>
    )
}

export default Header;