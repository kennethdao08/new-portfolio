import React from "react";
import Button from "./Button";

function Footer(props) {
    return (
      <ul>
        <h4>{props.title}</h4>
        {/* there should probably be a list of social obj to deconstruct here */}
        <li><Button name={"LinkedIn"} url={"https://www.example.com"} /></li>
        <li><Button name={"Github"} url={"https://www.example.com"} /></li>
        <li><Button name={"Instagram"} url={"https://www.example.com"} /></li>
      </ul>
    );
}

export default Footer;