const Card = (props) => {
  return (
    <section id={props.target} className="card round-corner-sm">
      <h1>Lab Facilitator</h1>
      <h4>
        <em>at</em> Portland State University
      </h4>
      <h4>
        <em>from</em> September 2021 <em>to</em> December 2022
      </h4>
      <ul role="listing experience">
        <li>Presenting and explaining data structure concepts to groups of students in labs</li>
        <li>Guiding individual students to solutions for programming problems using C++</li>
        <li>Developing and maintaining C++ code bases for use in computer science labs</li>
        <li>Coordinating lab and lecture materials development with project management software</li>
        <li>Proctoring student exams and coding proficiency demonstrations</li>
        <li>Training new employees with debugging exercises and code discussions</li>
      </ul>
    </section>
  );
};

export default Card;
