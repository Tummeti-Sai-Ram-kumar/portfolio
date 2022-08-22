import React from 'react'
import './projects.css'



const Projects = () => {
    return(
        <section class="projects" id="projectsnav">
            <h1>Projects</h1>
            <div class="all-projects">
                <div class="project"  data-aos="fade-up">
                    <p class="project-name">Housie Game</p>
                    <p class="project-desc">A voice enabled Housie Game skill which gonna replace a human game organizer with Alexa</p>
                    <button>View More <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="project" data-aos="fade-up">
                    <p class="project-name">QR Arena</p>
                    <p class="project-desc">Implemented both QR Code Reader and QR Code Generator</p>
                    <button>View More <i class="fa-solid fa-arrow-right"></i></button>   
                </div>
                <div class="project" data-aos="fade-up">
                    <p class="project-name" >IT Store Asset Inventory Management</p>
                    <p class="project-desc">IT Store Asset Inventory Management deals with the management and tracking of assets in stock , this keeps a proper track of the
                    assets which comes in and goes out of IT store</p>
                    <button>View More <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="project" data-aos="fade-up">
                    <p class="project-name">Rock Paper Scissors</p>
                    <p class="project-desc">Rock Paper Scissor is a hand game</p>
                    <button>View More <i class="fa-solid fa-arrow-right"></i></button>  
                </div>
            </div>
        </section>
    )
}

export default Projects