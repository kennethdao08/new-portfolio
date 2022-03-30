import React from "react";
import ListItem from "./ListItem";

function TechCard(props) {
    const examples = props.examples;
    const listItems = examples.map(example => (
        <ListItem itemName={example}/>
    ));
    return (
        <li>
            <h3>{props.title}</h3>
            <ul>
                {listItems}
            </ul>
        </li>
    );

}

export default TechCard;