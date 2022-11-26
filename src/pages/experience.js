import { motion } from "framer-motion";
import Card from "../card";

const cardType = "card card-v";

const Experience = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
            key={props.text[entry].header}
            class={cardType}
            target={props.text[entry].header}
            one={
              <div className="exp-one">
                <div className="headers">
                  <h1>{props.text[entry].header}</h1>
                  <h4>{props.text[entry].subheader}</h4>
                </div>
                <p>{props.text[entry].date}</p>
              </div>
            }
            two={
              <>
                <p className="card-desc">{props.text[entry].desc}</p>
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
