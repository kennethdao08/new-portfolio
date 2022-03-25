import React from "react";

function ProjectCard(props) {
    return (
        <div className="card-group">
            <h3>{props.projectName}</h3>
            {/* // image goes here */}
            <p>{props.desc}</p>
            <button>code</button>
            <button>source</button>
        </div>

    );
}

export default ProjectCard;