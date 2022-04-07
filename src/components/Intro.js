import React from "react";
import Button from "./Button";

function Intro(props) {

    return (
        <section>
            <p>{props.desc}</p>
            <Button name={props.btnDesc} url={props.url}/>
        </section>
    );
}

export default Intro;