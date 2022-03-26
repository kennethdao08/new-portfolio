import React from "react";

function Footer(props) {
    return (
      <ul>
        <h4>{props.title}</h4>
        {/* there should probably be a list of social obj to deconstruct here */}
        <li>linked in</li>
        <li>github</li>
        <li>insta</li>
      </ul>
    );
}

export default Footer;