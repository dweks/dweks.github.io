import { motion } from "framer-motion";
import Card from "../card";
import profilePic from "../images/me.png";

const About = (props) => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        key={props.text.intro.greeting}
        class={"card card-h"}
        target={props.text.intro.greeting}
        one={
          <>
            <img
              src={profilePic}
              alt="Picture of Blake Stephens"
              width="200px"
            />
          </>
        }
        two={
          <>
            <h1>{props.text.intro.greeting}</h1>
            <p role="introduction">{props.text.intro.desc}</p>
          </>
        }
      />
      <Card
        key={props.text.bio1.header}
        class={"card card-v"}
        target={props.text.bio1.header}
        one={<h1>{props.text.bio1.header}</h1>}
        two={
          <>
            <p>{props.text.bio1.desc}</p>

            <h2>{props.text.bio1.subheader1}</h2>

            <div role="indentation" className="indent">
              <p className="p2">{props.text.bio1.degree1.header}</p>
              <p className="p3">{props.text.bio1.degree1.date}</p>
              <p className="p3">{props.text.bio1.degree1.gpa}</p>

              <p className="p2">{props.text.bio1.degree2.header}</p>
              <p className="p3">{props.text.bio1.degree2.date}</p>
            </div>

            <h2>{props.text.bio1.subheader2}</h2>
            <ul role="listing courses">
              {props.text.bio1.courses.map((course) => {
                return (
                  <li role="course list item" key={course}>
                    {course}
                  </li>
                );
              })}
            </ul>
          </>
        }
      />
      <Card
        key={props.text.bio2.header}
        class={"card card-v"}
        target={props.text.bio2.header}
        one={<h1>{props.text.bio2.header}</h1>}
        two={
          <>
            <p>{props.text.bio2.desc1}</p>
            <p>{props.text.bio2.desc2}</p>
          </>
        }
      />
      <div className="page-end" role="aesthetics" />
    </motion.div>
  );
};

export default About;
