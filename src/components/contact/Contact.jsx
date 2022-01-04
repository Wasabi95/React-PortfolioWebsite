import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/office.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="usa">USA</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
          </select>
          <textarea placeholder="Message"></textarea>
          <label for="country">Country</label>

          <button type="submit">Send</button>

          {message && <span>Your Email Was Sent</span>}
        </form>
      </div>
    </div>
  );
}
