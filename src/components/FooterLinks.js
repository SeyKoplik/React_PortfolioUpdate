import React from "react";



function FooterLinks() {

  return (
    <footer className="navbar fixed-bottom navbar-expand-lg text-center footer">
      <p className="navbar-brand m-auto"><small>&#169; Copyright 2020 Seychelle Koplik</small></p>
      <h4 className="socialFooter"> Social: 
      <a href="http://www.github.com/seykoplik" target="_blank" className="fa fa-github fafooter"></a>
      <a href="http://linkedin.com/in/seykoplik" target="_blank" className="fa fa-linkedin fafooter"></a>
      <a href="http://www.instagram.com/seykoplik" target="_blank" className="fa fa-instagram fafooter"></a>
    </h4>
    </footer>
  );
}

export default FooterLinks;