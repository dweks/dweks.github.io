import Card from "../card";
import { motion } from "framer-motion";

const Skills = (props) => {
  return (
    <motion.div
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
              <div className="skill-one">
                <h1>{props.text[entry].header}</h1>
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
      <div aria-hidden="true" className="page-end" />
    </motion.div>
  );
};

export default Skills;
