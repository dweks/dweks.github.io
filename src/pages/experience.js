import { motion } from "framer-motion";
import Card from "../card";

const Experience = () => {
  return (
    <motion.div
      role="animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        key={exp1.header}
        target={1}
        header={exp1.header}
        date={exp1.date}
        content={exp1.content}
      />
      <Card
        key={exp2.header}
        target={2}
        header={exp2.header}
        date={exp1.date}
        content={exp2.content}
      />
      <Card
        key={exp1.header}
        target={3}
        header={exp1.header}
        date={exp1.date}
        content={exp1.content}
      />
      <div className="page-end" role="aesthetics" />
    </motion.div>
  );
};

const exp1 = {
  header: (
    <div className="card-header">
      <h1>Lab Facilitator</h1>
      <h4>Portland State University</h4>
    </div>
  ),
  date: <p>September 2021 to December 2022</p>,
  content: (
    <>
      <p className="card-desc">Explanation about my job here.</p>
      <ul role="listing experience">
        <li>
          Presenting and explaining data structure concepts to groups of
          students in labs
        </li>
        <li>
          Guiding individual students to solutions for programming problems
          using C++
        </li>
        <li>
          Developing and maintaining C++ code bases for use in computer science
          labs
        </li>
        <li>
          Coordinating lab and lecture materials development with project
          management software
        </li>
        <li>Proctoring student exams and coding proficiency demonstrations</li>
        <li>
          Training new employees with debugging exercises and code discussions
        </li>
      </ul>
    </>
  ),
};

const exp2 = {
  header: (
    <div className="card-header">
      <h1>Front-end Developer</h1>
      <h4>Capstone Project: Isle of Trust</h4>
    </div>
  ),
  date: <p>March 2022 to September 2022</p>,
  content: <ul role="listing experience"></ul>,
};

export default Experience;
