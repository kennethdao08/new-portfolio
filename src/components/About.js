import React from "react";

function About(props) {
    return (
        <section>
            <h1>About Me</h1>
            <p>{props.desc}</p>
        </section>
    );
}

export default About;