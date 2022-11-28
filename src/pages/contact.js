import Card from "../card";
import { motion } from "framer-motion";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";

const Contact = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        class={"card card-v"}
        one={
          <>
            <h1>{props.text.header}</h1>
            <div aria-label="Social website links" className="social">
              <div className="social-link">
                <a href={props.text.ghurl} target="_blank" rel="noreferrer">
                  <img
                    className="social-icon"
                    src={githubIcon}
                    alt="GitHub icon"
                    aria-hidden="true"
                  />
                  {props.text.gh}
                </a>
              </div>
              <div className="social-link">
                <a href={props.text.liurl} target="_blank" rel="noreferrer">
                  <img
                    className="social-icon"
                    src={linkedinIcon}
                    alt="Linkedin icon"
                    aria-hidden="true"
                  />
                  {props.text.li}
                </a>
              </div>
            </div>
          </>
        }
        two={<p className="p">{props.text.desc}</p>}
      />
      <form
        action="mailto:dwekser@gmail.com"
        method="POST"
        encType="text/plain"
        name="PorfolioContactForm"
        aria-label="Contact form for visitors"
      >
        <div className="inp">
          <label htmlFor="name">{props.text.name}</label>
          <input
            type="text"
            className="text-entry"
            id="name"
            name="name"
            maxLength="40"
            aria-label="name entry"
          />
        </div>
        <div className="inp">
          <label htmlFor="email">{props.text.email}</label>
          <input
            type="text"
            className="text-entry"
            id="email"
            name="email"
            maxLength="40"
            aria-label="email entry"
          />
        </div>
        <div className="inp">
          <label htmlFor="message">{props.text.message}</label>
          <textarea
            aria-label="message entry"
            id="message"
            name="message"
          ></textarea>
        </div>
        <div aria-label="send and reset form buttons" id="buttons">
          <input aria-label="opens email client to send message" type="submit" value="Send" />
          <input aria-label="resets all text entry fields" type="reset" value="Reset" />
        </div>
      </form>
      <div aria-hidden="true" className="page-end" />
    </motion.div>
  );
};

export default Contact;
