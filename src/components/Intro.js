import React from "react";

function Intro(props) {

    return (
        <section>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <button>{props.btnDesc}</button>
        </section>
    );
}

export default Intro;