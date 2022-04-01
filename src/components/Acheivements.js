import React from "react";
import ListItem from "./ListItem";


function Acheivements(props) {
    return (
        <div>
            <h1>Acheivements</h1>
            <ul>
                <ListItem itemName={"2017"} />
                <ListItem itemName={"2018"} />
            </ul>
        </div>

    );
}

export default Acheivements;