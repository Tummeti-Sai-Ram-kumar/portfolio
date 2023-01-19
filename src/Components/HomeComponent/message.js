import React from 'react'
import './message.css'

import {GoogleMap , useLoadScript , Marker} from '@react-google-maps/api'

/*
                <form>
                    <div>
                        <label>Name</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Email </label>
                        <input></input>
                    </div>
                    <div>
                        <label>Write your message</label>
                        <textarea></textarea>
                    </div>
                </form>
*/                

function Map(){


    return(
        
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.979517219017!2d78.3551252!3d17.4479897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df1fbe21cb%3A0x7ce44f54260e1ce9!2sPragmatic%20Play%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1674123499094!5m2!1sen!2sin" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        
        
    )
}

const Message = () => {


    return(
        <section class="message" id="message">
            <h1>Contact</h1>
            <div class = "content">
            <div class="map" data-aos="fade-right">
                <div class="contact-details-1">
                    <h3>Email</h3>
                    <p>tummetisairamkumar1234@gmail.com</p>
                </div>

                <div class="contact-details-2">
                    <h3>Mobile</h3>
                    <p>+91 6304405323</p>
                </div>


                <div class="social-links">
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="https://twitter.com/RamTummeti"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/tummetisairamkumar/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/tummeti-sai-ram-kumar-355243193/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com/tummeti.sairamkumar"><i class="fab fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="mail" data-aos="fade-right">
                <div class="location">
                    <h3>Location</h3>
                    <section class="loc">
                        <Map></Map>
                    </section>
                </div>
            </div>
            </div>
        </section>
    )
}



export default Message