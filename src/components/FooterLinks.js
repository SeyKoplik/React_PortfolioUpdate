import React from "react";

function FooterLinks() {

  return (
    <footer className="navbar fixed-bottom footer">
      <p className="navbar-brand copyright">&#169; 2020 Seychelle Koplik</p>
      <h4 className="socialFooter"> Social: 
      <a href="http://www.github.com/seykoplik" target="_blank" className="fa fa-github fafooter"></a>
      <a href="http://linkedin.com/in/seykoplik" target="_blank" className="fa fa-linkedin fafooter"></a>
      <a href="http://www.instagram.com/seykoplik" target="_blank" className="fa fa-instagram fafooter"></a>
    </h4>
    </footer>
  );
}

export default FooterLinks;