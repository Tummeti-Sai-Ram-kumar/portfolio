import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from "react";
import './header.css'

const Header = () => {
    const [MenuToggle,setMenuToggle] = useState(0);

    return(
        <header class="header" id="home"> 

            <input type="checkbox" class="menu-input" id="menu-input-id"></input>
            <label class="menu-label" for="menu-input-id" onClick={() => setMenuToggle(!MenuToggle)}></label>
            
            <div class="title">
                <p>Tummeti Sai Ram Kumar</p>
            </div>

            <nav class={MenuToggle ? "nav-contents" : "nav-contents anim"}>
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