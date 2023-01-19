import React from "react";
import { useState } from "react";
import './myintro.css'

import MyImage from '../Images/MyImage.jpeg'
import { within } from "@testing-library/react";

/*

{
                            exp.map(s => {
                                return({

                                })
                            })
                        }

*/


const Intro = (props) => {

    const exp = props.experience;
    console.log(exp);

    const [index,setIndex] = useState(0);
    const [type,setType] = useState(exp[index]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i+1)%exp.length)
        },4000);
        return () => clearInterval(timer);
    },[])


    React.useEffect(() => {
        setType(exp[index])
    },[index]);




    return(
        <section class="intro">
            <div class="intro-text-div" data-aos="fade-up">
                <p class="intro-text"><span id="name">I am Tummeti Sai Ram Kumar </span>
                <div class="write-animate">
                    
                    <b>
                        <span class="text first-text">I'm a </span>
                        <span class="text second-text">{type}</span>
                    </b>
                    
                </div>
                I'm Tummeti Sai Ram Kumar, Software Developer Engineer Intern at Pragmatic Play India Pvt.Ltd 
                and also a final year undergraduate from Lovely Professional University. 
                I'm passionate about finding innovative solutions for the real time problems, with 
                programming and software development as my primary skills, I build solutions 
                for any test case. I had my developer experience as a student from Google Developer 
                Student Clubs and Amazon Alexa Developer Community where I created Amazon Alexa skills 
                which are published in Alexa store. Recently, I also had my internship experience from
                 Trident Group where I developed an interface for Asset Inventory management. With a strong 
                intent to explore and implement new things,
                 I always try to be the best of whatever I am by keeping Infinity as my limit.</p>
            </div>

            <div class="intro-img" data-aos="zoom-in">
                <img src={MyImage}></img>
            </div>
        </section>
    )
}

export default Intro