import React from 'react'
import './skills.css'
const Skills = () => {
    const skills = ["C","C++","Python","HTML","CSS","JavaScript","SQL","BootStrap","ReactJs","NodeJs","Firebase"
        ,"ExpressJs","MongoDb","API","Materialise CSS","Alexa Skills Kit","Data Structures and Algorithms","Microsoft Excel","Database Management Systems"
    ]
    return(
        <section class="skills-section" id="skills" data-aos="fade-right">
            <h1 class="skills-title">Technical Skills</h1>
            <div class="all-skills">
                {
                    skills.map(s => {
                        console.log(s);
                        return(
                            <span class="skill">{s}</span>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills

