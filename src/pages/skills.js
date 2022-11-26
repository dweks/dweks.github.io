import Card from "../card";
import { motion } from "framer-motion";

const Skills = (props) => {
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
            one={<div className="skill-one"></div>}
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

export default Skills;
