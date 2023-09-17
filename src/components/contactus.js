import React from 'react';

function ContactSection() {
  return (
    <div className="contact-sec pt-5 pb-2" id="contact">
      <div className="get-in-touch message-container">
        <form
          className="form-message"
          action="https://formsubmit.co/rjpalang@gmail.com"
          method="POST"
        >
          <h3>Get in touch with us</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="number" name="number" placeholder="Phone no." required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" value="value-1">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;