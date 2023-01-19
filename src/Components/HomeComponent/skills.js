import React from 'react'
import './skills.css'
const Skills = () => {
    const skills = ["C","C++","Python","HTML","CSS","SQL","JSON", "JavaScript","BootStrap","ReactJs","NodeJs","API","Firebase"
        ,"Materialise CSS","ExpressJs","Alexa Skills Kit","MongoDb","Microsoft Excel","Data Structures and Algorithms","Database Management Systems"
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

