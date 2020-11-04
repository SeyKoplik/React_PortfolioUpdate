import React from "react";
import Projects from "../../Projects";
import PortfolioCard from "../PortfolioCard";

function Portfolio() {
    const oneProject = Projects.map(oneData => 
      <PortfolioCard 
      title={oneData.title}
      repo_url={oneData.repo_url}
      demo_img={oneData.demo_img}
      deployed_url={oneData.deployed_url}
      key={oneData.id} />
      )

      console.log(Projects[0].demo_img);

  return (
    <>
      <h3>Projects <small className="text-muted">//  Activities</small></h3>
      <hr />
      {oneProject}
    </>
  )
}


export default Portfolio;
