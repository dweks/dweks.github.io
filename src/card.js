const Card = (props) => {
  return (
    <section id={props.target} className="card">
      <div className="card-top">
        {props.header}
        {props.date}
      </div>
      <div className="card-bottom">
        {props.content}
      </div>
    </section>
  );
};

export default Card;
