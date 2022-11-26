import Card from "../card";
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
            key={props.text[entry].name}
            class={"card card-h"}
            target={props.text[entry].name}
            one={<></>}
            two={
              <>
                <div className="exp-one">
                  <div className="headers">
                    <h1>{props.text[entry].name}</h1>
                    <h4>{props.text[entry].language}</h4>
                  </div>
                </div>
                <p className="card-desc">{props.text[entry].desc}</p>
              </>
            }
          />
        );
      })}
    </motion.div>
  );
};

export default Projects;
