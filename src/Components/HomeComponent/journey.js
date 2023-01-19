import React from 'react';
import {useState} from 'react'
import './journey.css'
//
//
const Journey = () => {

    const [Toggle,setToggle] = useState(1)

    const ToggleTab = (Toggle) => {
        setToggle(Toggle)
    }

    return (
        <section class="journey">
            <h1>Qualifications</h1>
            <div class="journey-tabs" data-aos="zoom-in">
                <div class="journey-tab">
                    <div>
                        <p onClick={() => ToggleTab(1)} class={Toggle === 1 ? "UnderLine" : ""}>Education</p>
                    </div>
                </div>
                <div class="journey-tab">
                    <div>
                        <p onClick={() => ToggleTab(2)} class={Toggle === 2 ? "UnderLine" : ""}>Experience</p>
                    </div>
                </div>
            </div>

            <div class="qualification">
                <div class={Toggle === 1 ? "qualification-details" : "qualification-details hidden"}>
                    <div class="education qual">
                        <div class="edu-1">
                            <p class="dot"></p>
                            <p>Matriculation</p>
                            <span>St.Joseph's English Memorial School</span>
                            <span>05/2016 - 05/2017</span>
                        </div>
                        <div class="edu-2">
                            <p class="dot dot-2"></p>
                            <p>Intermediate</p>
                            <span>Srujana Junior College</span>
                            <span>06/2017 - 06/2019</span>
                        </div>
                        <div class="edu-3">
                            <p class="dot"></p>
                            <p>Bachelor Of Technology</p>
                            <span>Lovely Professional University</span>
                            <span>07/2019 - Present</span>
                        </div>
                    </div>
                </div>
                <div class={Toggle === 2 ? "qualification-details" : "qualification-details hidden"}>
                    <div class="experience qual"> 
                        <div class="exp-1">
                            <p class="dot"></p>
                            <p>Alexa Skill Developer</p>
                            <span>Amazon Alexa Developer Community</span>
                            <span>01/2020 - 12/2021</span>
                        </div>
                        <div class="exp-2">
                            <p class="dot dot-2"></p>
                            <p>Web Developer</p>
                            <span>Google Developer Student Clubs</span>
                            <span>02/2021 - 05/2021</span>
                        </div>
                        <div class="exp-3">
                            <p class="dot"></p>
                            <p>SDE Intern (Infra Operations)</p>
                            <span>Trident Group</span>
                            <span>01/2022 - 07/2022</span>
                        </div>
                        <div class="exp-4">
                            <p class="dot dot-4"></p>
                            <p>SDE Intern </p>
                            <span>Pragmatic Play India Pvt.Ltd</span>
                            <span>01/2023 - Present</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey