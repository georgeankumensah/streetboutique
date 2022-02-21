import react from "react";
import sitename from "../components/nav/images/logoimage.png"
function About(){
    return(
        <div className="about">
            <div className="about-img">
                <img src={sitename} alt="img" />
            </div>
            <div className="about-text">
                <h3>Grab whatever you want on campus here!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta iste saepe mollitia iusto eum omnis deleniti facere cumque ut totam repudiandae expedita, nulla molestias nobis nostrum. Molestias placeat saepe labore quas magni possimus nam esse non nihil cumque, ea adipisci alias ratione dignissimos ducimus.</p>
                <a href="www.google.com" className="about-btn ">Read more</a>
            </div>
        </div>
    )
}

export default About;