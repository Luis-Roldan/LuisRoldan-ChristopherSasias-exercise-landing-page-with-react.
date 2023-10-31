import React from "react";

//create your first component
const Card = () => {
    return (
        <div className="card" style={{ width: "18 rem" }}>
            <img
                src="https://via.placeholder.com/500x325.jpg"
                className="card-img-top card-img-custom"
                alt="Imagerelatedtohtml5"
            />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut enim quisquam, praesentium ducimus incidunt ipsa atque officiis exercitationem,</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;




