import Card from "../card";
import flink from "../images/foreign-link.png";
import { motion } from "framer-motion";

const Projects = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {Object.keys(props.text).map((entry) => {
        if (entry === "intro") {
          return (
            <p key={entry} className="intro">
              {props.text[entry]}
            </p>
          );
        }
        return (
          <Card
            key={props.text[entry].title}
            class={"card card-v"}
            target={props.text[entry].title}
            one={
              <div className="proj-one" role="contain card subsection">
                <div className="headers">
                  <h1>{props.text[entry].title}</h1>
                  <h4>{props.text[entry].language}</h4>
                </div>
                <div className="flink" role="contain foreign link">
                  <img
                    className="flink-icon"
                    src={flink}
                    alt="foreign link icon"
                  />
                  <a
                    href={props.text[entry].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source on {props.text[entry].sourcename}
                  </a>
                </div>
              </div>
            }
            two={
              <>
                <p>{props.text[entry].desc}</p>
              </>
            }
          />
        );
      })}
    </motion.div>
  );
};

export default Projects;
