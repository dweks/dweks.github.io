import Card from "../card";
import { motion } from "framer-motion";

const cardType = "card card-h";

const Projects = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {Object.keys(props.text).map((entry) => {
        if (entry === "overview") {
          return (
            <p key={entry} className="overview">
              {props.text[entry]}
            </p>
          );
        }
        return (
          <Card
            key={props.text[entry].name}
            class={cardType}
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
