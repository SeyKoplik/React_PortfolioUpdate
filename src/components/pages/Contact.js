import React from "react";

function Contact(props) {
  return (
    <>
      <form>
        <fieldset>
          <h3>Contact <small className="text-muted">Seychelle</small></h3>
          <p>This section is still under construction please bare with me.</p>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
              </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleTextarea">Message</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-secondary">Submit</button>
            </fieldset>
         </form>
    </>
  );
}

export default Contact;
