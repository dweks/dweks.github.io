import { motion } from "framer-motion";
import Card from "../card";

const Experience = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
              <div className="exp-one">
                <div className="headers">
                  <h1>{props.text[entry].title}</h1>
                  <h4>{props.text[entry].subtitle}</h4>
                </div>
                <h3>{props.text[entry].date}</h3>
              </div>
            }
            two={
              <>
                <p>{props.text[entry].desc}</p>
                <ul role="listing experience">
                  {props.text[entry].list.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </>
            }
          />
        );
      })}
      <div className="page-end" role="aesthetics" />
    </motion.div>
  );
};

export default Experience;
