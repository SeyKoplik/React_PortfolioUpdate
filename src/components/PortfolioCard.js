import React from "react";
import pic from "../images/burgerApp.png"

function PortfolioCard(props) {
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={pic} alt={props.demo_img} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <a href={props.repo_url} className="btn portfolioBtn" target="_blank">Repo</a>

                    {' '}

                    <a href={props.deployed_url} className="btn portfolioBtn" target="_blank">Deploy</a>
                </div>
            </div>
        </>
    );
}

export default PortfolioCard;