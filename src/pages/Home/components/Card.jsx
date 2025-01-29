import React from "react";

const Card = ({
    title,
    picture,
    description,
    link,
    linkDescription,
}) => {
    return(
        <div>
       <div className="card">
        {picture ? (
            <img className="card-image" src={picture} alt="project pic" />
        ) : null}
            <h5 className="card-title">{title}</h5>
            <p className="card-description">{description}</p>
          <a
            href={link}
            rel={"noreferrer"}
            target={"_blank"}
            className="card-link button-hover"
          >
            {linkDescription}
          </a>
        </div> 
    </div>
    );
}
export default Card
