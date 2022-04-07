import React from "react";
import Button from "./Button";

function ProjectCard(props) {
    return (
        <div className="card-group">
            <h3>{props.projectName}</h3>
            {/* // image goes here */}
            <p>{props.desc}</p>
            <Button name={"Code"} url={props.codeLink} />
            <Button name={"Source"} url={props.sourceLink} />
        </div>

    );
}

export default ProjectCard;