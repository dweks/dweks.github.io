import Card from "../card";
import { motion } from "framer-motion";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";

const Contact = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        class={"card card-v"}
        one={
          <>
            <h1>{props.text.header}</h1>
            <div className="social" role="contain social links">
              <div className="social-link">
                <a href={props.text.ghurl} target="_blank" rel="noreferrer">
                  <img
                    className="social-icon"
                    src={githubIcon}
                    alt="GitHub icon"
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
        role="contact form"
      >
        <div className="inp">
          <label htmlFor="name">{props.text.name}</label>
          <input
            type="text"
            className="text-entry"
            id="name"
            name="name"
            maxLength="40"
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
          />
        </div>
        <div className="inp">
          <label htmlFor="message">{props.text.message}</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div id="buttons">
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </div>
      </form>
      <div className="page-end" role="aesthetics" />
    </motion.div>
  );
};

export default Contact;
