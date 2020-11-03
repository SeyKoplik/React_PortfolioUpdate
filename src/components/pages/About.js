import React from "react";

function About() {
  return (
    <>
    <div className="container-fluid aboutBox">
    <section className="container-sm w-75 p-3 aboutSection">
    <h2>About <small className="text-muted">Seychelle</small></h2>
    <hr />
    <img className="float-left mr-3 profilepic" src="../images/ProfilePic1.jpg" alt="ProfilePic" />
    <p>Seychelle Koplik is a web development and coding bootcamp student based in Philadelphia, PA. Born in the Philippines, raised in Chicago, and now living in Philadelphia. Formerly a Chef with highly adaptable creative skills and passionate drive. Seychelle departed the fast-paced and intensely hot kitchens with a decade long experience and varying progressive skills within the culinary industry.</p>
    <p>Striving for career success in the ever demanding field of Information Technology. Eager to learn and absorb new frontier of technology. Yearning to be able to provide elegant, sleek, understandable coding.</p>
    <p>Hopeful that some day she would be able to deliver the kind of service to provide clients with the highest of expectations for whatever web development needs that may arise. Seeking to beautify, inform, and enhance user experience via design and technology.</p>
    <p>When not studying to become the best coder and developer that she can be, Seychelle likes to still hone her culinary skills and very much still enjoy cooking. Dinner parties, when it was still the norm before the pandemic was one of the things she enjoyed hosting for friends and family. Lately, making pizza from scratch has been a source of joy and coming up with new pizza topping combinations has been a delight!</p>
    <h6 className="h6About">
      <a className="aboutEmailLink" href="mailto:sey.koplik@gmail.com" target="_blank">sey.koplik@gmail.com</a>
      <br />
      phone: (808)-442-2346
      <br />
      <a className="aboutResumeLink" href="https://docs.google.com/document/d/1HEE8RCFbfd_eefKuUShtmUTV-Lj304lxXyyhxs2f_QE/preview" target="_blank">CLICK FOR RESUME ✉️</a>
    </h6>
    </section>
    </div>
    </>
  );
}

export default About;
