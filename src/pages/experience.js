import { motion } from "framer-motion";
import Card from "../card";

const Experience = (props) => {
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
              <div className="exp-one">
                <div className="headers">
                  <h1>{props.text[entry].header}</h1>
                  <p className="p2">{props.text[entry].subheader}</p>
                </div>
                <p className="p3">{props.text[entry].date}</p>
              </div>
            }
            two={
              <>
                <p>{props.text[entry].desc}</p>
                <ul>
                  {props.text[entry].list.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </>
            }
          />
        );
      })}
      <div aria-hidden="true" className="page-end" />
    </motion.div>
  );
};

export default Experience;
