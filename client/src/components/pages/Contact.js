import React, { useState } from "react";
import axios from "axios";


function Contact() {
  const [postEmail, setPostEmail] = useState({
    email: "",
    name: "",
    text: ""
  })

  const handleInputChange = event => {
    const { name, value } = event.target;

    setPostEmail({
      ...postEmail,
      [name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    axios.post("/api/submit", postEmail)
      .then(res => {
        console.log(res);
        saySent();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const saySent = event => {
    alert('Thanks! Message Sent!')
  }

  return (
    <>
      <form>
        <fieldset>
          <h3>Contact <small className="text-muted">Seychelle</small></h3>
          <hr />
          <p>This section is still under construction please bare with me.</p>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter your name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email" onChange={handleInputChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" id="text" name="text" rows="3" placeholder="Please enter message here.." onChange={handleInputChange}></textarea>
          </div>
          <button type="submit" className="btn btn-outline-secondary contactBtn submit" onClick={handleFormSubmit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default Contact;
