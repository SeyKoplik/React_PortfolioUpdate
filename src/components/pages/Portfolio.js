import React from "react";
import portfolio from "../../portfolio.json";
import PortfolioCard from "../PortfolioCard";

class Portfolio extends React.Component {
  state = {
    portfolio: portfolio
  }
  
  render() {
  return (
    <>
      <h3>Projects <small className="text-muted">&& Activities</small></h3>
      <hr />

      {this.state.portfolio.map(oneData => 
        <PortfolioCard 
        title={oneData.title}
        repo_url={oneData.repo_url}
        demo_img={oneData.demo_img}
        deployed_url={oneData.deployed_url}
        key={oneData.id} />
        )}
    </>
  );
}
}

export default Portfolio;
