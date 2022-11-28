import Card from "../card";
import flink from "../images/foreign-link.png";
import { motion } from "framer-motion";

const Projects = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
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
            key={props.text[entry].header}
            class={"card card-v"}
            target={props.text[entry].header}
            one={
              <div className="proj-one">
                <div className="headers">
                  <h1>{props.text[entry].header}</h1>
                  <p2>{props.text[entry].language}</p2>
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
                    {props.text[entry].sourcename}
                  </a>
                </div>
              </div>
            }
            two={
              <>
                <p>{props.text[entry].desc1}</p>
                <p>{props.text[entry].desc2}</p>
                <p>{props.text[entry].desc3}</p>
              </>
            }
          />
        );
      })}
      <div className="page-end" role="aesthetics" />
    </motion.div>
  );
};

export default Projects;
