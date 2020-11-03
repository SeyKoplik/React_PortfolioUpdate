import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import FooterLinks from "./components/FooterLinks";



function App() {
 
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <FooterLinks />
      </div>
    </Router>
  );
}

export default App;


// MUST RUN IN TERMINAL FIRST   `npm i react-router-dom`
// using the Route to Link on NavTabs
// atleast the homepage should be exact path
// route to contact isnt exact path because there is also the learn subcategory
