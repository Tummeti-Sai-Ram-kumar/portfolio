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
        
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=lovely%20professional%20university&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        
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
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
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