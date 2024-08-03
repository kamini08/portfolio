import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/contact.css";
import "../App.css";


export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const onSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);
    console.log(process.env.REACT_APP_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      setSubmit(true);
    } else {
      return(alert("Something went wrong!"));
    }

  };

  return (
    <>
      <Navbar />
      {!submit?

      (<div className="contact-container">
        <div className="msg-box">
          <img className="msg" src="/Message.gif" alt="message"></img>
          <h1 className="title">Get in Touch!</h1>
        </div>
        <div className="contact-us">
          <form onSubmit={onSubmit}>
            <input placeholder="Name" name="Name" required type="text" />
            <input name="Email" placeholder="Email" type="email" required />
            <textarea name="Message" placeholder="Message" type="text" required />
            <button type="submit">
              Send
            </button>
          </form>
        </div>
      </div>) : (
        <div className="contact-container">
          <span className="span"></span>
         
          <img src="Email.gif" alt="Message Sent!"></img>
          <button onClick={() => {
            setSubmit(false);
          }}>
              Go Back
            </button>
          
        </div>
      )}
      <aside className="_social-links">
        <ul className="_links-list">
          <li className="_social-link">
            <a
              href="https://linkedin.com/kaminibanait"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="_social-link">
            <a
              href="https://github.com/kamini08"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="_social-link">
            <a
              href="mailto:kaminibanait03@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </aside>

      <Footer />
    </>
  );
}
