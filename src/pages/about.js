import React, {useState} from 'react';
import '../style.css';

function About (){
    const message= <div>It is a multipage website using the reactJs framework.<br/> This site is using Bootstrap. Also using React Router, Props, and React Hooks.<br/> There are three pages: home, about and gallery page.</div>;
    const [heading, setHeading] = useState("Thank you for visiting My Advantures!");

    return <div class="bgimg col text-center">
        <h3>{heading}</h3>
        <button
        type="button"
        onClick={() => setHeading(message)}
         class="btn btn-outline-dark btn-lg">More Info</button>
      </div>
}
export default About;

