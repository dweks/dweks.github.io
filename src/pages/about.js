import { motion } from "framer-motion";
import Card from "../card";
import profilePic from "../images/me.png";

const About = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        key={props.text.intro.greeting}
        class={"card card-h"}
        target={props.text.intro.greeting}
        one={
          <img src={profilePic} alt="Picture of Blake Stephens" width="200px" />
        }
        two={
          <>
            <h1>{props.text.intro.greeting}</h1>
            <p>{props.text.intro.desc}</p>
          </>
        }
      />
      <Card
        key={props.text.bio1.title}
        class={"card-single"}
        target={props.text.bio1.title}
        single={
          <>
            <h2>{props.text.bio1.title}</h2>
            <p>{props.text.bio1.desc}</p>
          </>
        }
      />
      <Card
        key={props.text.bio2.title}
        class={"card-single"}
        target={props.text.bio2.title}
        single={
          <>
            <h2>{props.text.bio2.title}</h2>
            <p>{props.text.bio2.desc}</p>
          </>
        }
      />
      <div className="page-end" role="aesthetics" />
    </motion.div>
  );
};

export default About;
