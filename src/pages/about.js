import { AnimatePresence, motion } from "framer-motion";
import Card from "../card";
import profilePic from "../images/me.png";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";

const About = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        <Card
          key={props.text.intro.greeting}
          class={"card card-h"}
          target={props.text.intro.greeting}
          one={
            <>
              <img
                src={profilePic}
                alt="Picture of Blake Stephens; the Author of this website."
                width="200px"
              />
              <div aria-label="Social website links" className="social">
                <div className="social-link">
                  <a
                    href={props.text.intro.ghurl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="social-icon"
                      src={githubIcon}
                      alt="GitHub icon"
                      aria-hidden="true"
                    />
                    {props.text.intro.gh}
                  </a>
                </div>
                <div className="social-link">
                  <a
                    href={props.text.intro.liurl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="social-icon"
                      src={linkedinIcon}
                      alt="Linkedin icon"
                      aria-hidden="true"
                    />
                    {props.text.intro.li}
                  </a>
                </div>
              </div>
            </>
          }
          two={
            <>
              <h1>{props.text.intro.greeting}</h1>
              <p>{props.text.intro.desc}</p>
            </>
          }
        />
        <Card
          key={props.text.bio1.header}
          class={"card card-v"}
          target={props.text.bio1.header}
          one={<h1>{props.text.bio1.header}</h1>}
          two={
            <>
              <p>{props.text.bio1.desc}</p>

              <h2>{props.text.bio1.subheader1}</h2>

              <div className="indent">
                <p className="p2">{props.text.bio1.degree1.header}</p>
                <p className="p3">{props.text.bio1.degree1.date}</p>
                <p className="p3">{props.text.bio1.degree1.gpa}</p>

                <p className="p2">{props.text.bio1.degree2.header}</p>
                <p className="p3">{props.text.bio1.degree2.date}</p>
              </div>

              <h2>{props.text.bio1.subheader2}</h2>
              <ul>
                {props.text.bio1.courses.map((course) => {
                  return <li key={course}>{course}</li>;
                })}
              </ul>
            </>
          }
        />
        <Card
          key={props.text.bio2.header}
          class={"card card-v"}
          target={props.text.bio2.header}
          one={<h1>{props.text.bio2.header}</h1>}
          two={
            <>
              <p>{props.text.bio2.desc1}</p>
              <p>{props.text.bio2.desc2}</p>
            </>
          }
        />
        <div aria-hidden="true" className="page-end" />
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
