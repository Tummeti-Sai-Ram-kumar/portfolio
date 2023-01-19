import React from 'react'
import './projects.css'



const Projects = () => {
    return(
        <section class="projects" id="projectsnav">
            <h1>Projects</h1>
            <div class="all-projects">
                <div class="project" data-aos="fade-up">
                    <p class="project-name">Todo List ( react.js )</p>
                    <p class="project-desc">• Maintains a list of things that needs to be get done .</p>
                    <a href="https://tummeti-sai-ram-kumar.github.io/todolist/"><button>View More <i class="fa-solid fa-arrow-right"></i></button>  </a>
                </div>
                <div class="project"  data-aos="fade-up">
                    <p class="project-name">Assignment Management System</p>
                    <div class="project-desc"><p>• Assignment Management System is developed to maintain a track of marks secured .</p>
                                           <p>• Allows the admin to do CRUD operations .</p></div>
                    <a href="https://github.com/Tummeti-Sai-Ram-kumar/StudentAssignmet"><button>View More <i class="fa-solid fa-arrow-right"></i></button></a>
                </div>
                <div class="project" data-aos="fade-up">
                    <p class="project-name" >IT Store Asset Inventory Management</p>
                    <div class="project-desc"><p>• IT Store Asset Inventory Management deals with the management and tracking of assets . </p>
                    <p>• Implemented QR based tracking of assets .</p></div>
                    <a href=""><button>View More <i class="fa-solid fa-arrow-right"></i></button></a>
                </div>
                <div class="project" data-aos="fade-up">
                    <p class="project-name">QR Code Generator</p>
                    <p class="project-desc">• Generates QR for any type of input like URL's and text messages</p>
                    <a href="https://tummeti-sai-ram-kumar.github.io/QR-Generator/"><button>View More <i class="fa-solid fa-arrow-right"></i></button></a> 
                </div>
                <div class="project" data-aos="fade-up">
                    <p class="project-name">QR Code Reader</p>
                    <p class="project-desc">• Scans any QR and generates the text or URL</p>
                    <a href="https://tummeti-sai-ram-kumar.github.io/QR-Code-Reader/"><button>View More <i class="fa-solid fa-arrow-right"></i></button></a>  
                </div>
                <div class="project"  data-aos="fade-up">
                    <p class="project-name">Housie Game</p>
                    <p class="project-desc">A voice enabled Housie Game skill which gonna replace a human game organizer with Alexa</p>
                    <a href="https://github.com/Tummeti-Sai-Ram-kumar/Housie-Game"><button>View More <i class="fa-solid fa-arrow-right"></i></button></a>
                </div>
                
                <div class="project" data-aos="fade-up">
                    <p class="project-name">Rock Paper Scissors</p>
                    <div class="project-desc">
                        <p>• Rock Paper Scissors is a voice enabled Alexa skill , which plays the role of the opponent in the game.</p>
                        <p>• Declares the winner after every 10 turns.</p>
                    </div>
                    <a href="https://github.com/Tummeti-Sai-Ram-kumar/Rock-Paper-Scissors"><button>View More <i class="fa-solid fa-arrow-right"></i></button></a>
                </div>
            </div>
        </section>
    )
}

export default Projects