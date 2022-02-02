import React from 'react'

import "../style.css"
import AI from "../../images/ai.jfif";
import Android from "../../images/android.png"
import Web from "../../images/web.jpg"
import Native from "../../images/native.png"

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-main-header'>
                <h1>Solutions for all types of software technologies</h1>
                <p><b>Ashar Infotech</b> provides solutions for a variety of tech problems including software domain, web domain and others</p>
            </div>
            <div className='services-body'>
                <div className='single-service-left'>
                    <img src={Android} alt="Ashar Infotech" />
                    <div className='single-service-content'>
                        <h1>Our Android Services</h1>
                        <p>Throughout our Android app development process, we offer transparency. That is why we report on a regular and weekly basis to our customers to remind them about the progress of the project and make recommendations whenever possible.</p>
                    </div>
                </div>
                <div className='single-service-right'>
                    <img src={Web} alt="Ashar Infotech" />
                    <div className='single-service-content'>
                        <h1>Our Web Services</h1>
                        <p>We're not generalists, we only offer you what we do best: Branded assets, UI/UX design, full-stack development, and conversion optimization.
                            We care about the impact our work has on your business or organization—not how it looks in our portfolio or in an award showcase.
                        </p>
                    </div>
                </div>
                <div className='single-service-left'>
                    <img src={AI} alt="Ashar Infotech" />
                    <div className='single-service-content'>
                        <h1>Our AI Solutions</h1>
                        <p>
                            Create data stories, generate actionable insights, and transform your everyday work with data-driven decision-making. Experience unprecedented growth and revenue by implementing advanced analytics across the enterprise. </p>
                    </div>
                </div>
                <div className='single-service-right'>
                    <img src={Native} alt="Ashar Infotech" />
                    <div className='single-service-content'>
                        <h1>Our Native Services</h1>
                        <p>TDeliver apps and update them with one click. OutSystems automatically checks dependencies and handles all deployment processes for you.
                            Easily build great looking mobile experiences with offline data synchronization.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
