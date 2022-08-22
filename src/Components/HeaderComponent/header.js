import React from "react";
import './header.css'

const Header = () => {
    return(
        <header class="header" id="home">

            <div class="title">
                <p>Tummeti Sai Ram Kumar</p>
            </div>

            <nav class="nav-contents">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projectsnav">Projects</a></li>
                    <li><a href="#message">Contact</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header