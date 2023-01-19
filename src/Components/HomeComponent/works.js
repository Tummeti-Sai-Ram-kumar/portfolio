import React from 'react'
import './works.css'

const Works = () => {
    return(
        <section class="works">
            <div class="acheivements work" >
                <h1>Acheivements</h1>
                <div data-aos="fade-right">
                    <p>ISRO Space Week Finalist</p>
                    <p>Great India Alexa Hackathon Finalist</p>
                    <p>You've Got Skills Winner</p>
                </div>
            </div>
            <div class="intrests work">
                <h1>Intrests</h1>
                <div data-aos="fade-right">
                    <p>Mathematics</p>
                    <p>Sustainable Development</p>
                    <p>Technology Insights</p>
                </div>
            </div>
            <div class="languages work">
                <h1>Languages</h1>
                <div data-aos="fade-right">
                    <p>English</p>
                    <p>Hindi</p>
                    <p>Telugu</p>
                </div>
            </div>
        </section>
    )
}

export default Works;