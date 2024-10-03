import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <figure className="contact-left">
        <img src="../../public/assets/2blackbean.jpg" />
      </figure>

      <form className="form flex flex-column">
        <h1>Contact Us</h1>

        <div className="form-group flex flex-column">
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            className="form-input"
            placeholder="Enter full name..."
          />
        </div>

        <div className="form-group flex flex-column">
          <label htmlFor="email" className="form-label">
            Full Name
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter full email..."
          />
        </div>

        <div className="form-group flex flex-column">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="textarea"
            placeholder="Enter message..."
          ></textarea>
        </div>

        <button className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
