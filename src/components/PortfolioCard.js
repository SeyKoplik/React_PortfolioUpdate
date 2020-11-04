import React from "react";


function PortfolioCard(props) {
    
    return (
        <>
            <div className="card portfolio-card">
                <img className="card-img-top" src={props.demo_img} alt={props.demo_img} />
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