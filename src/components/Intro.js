import React from "react";

function Intro(props) {

    return (
        <section>
            <p>{props.desc}</p>
            <button>{props.btnDesc}</button>
        </section>
    );
}

export default Intro;