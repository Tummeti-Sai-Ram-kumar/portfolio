import React from 'react'

import './home.css'

import Intro from './myintro'
import Journey from './journey'
import Skills from './skills'
import Works from './works'
import Projects from './projects'
import Message from './message'

const Home = () => {

    const experience = ["Software Developer Engineer","Front End Developer" , "Back End Developer","Alexa Skill Developer"]

    return(
        <div>
            <Intro experience={experience}></Intro>
            <Journey></Journey>
            <Skills></Skills>
            <Works></Works>
            <Projects></Projects>
            <Message></Message>
        </div>
    )
}

export default Home