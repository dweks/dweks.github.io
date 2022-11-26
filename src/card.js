const Card = (props) => {
  return (
    <section id={props.target} className={props.class}>
      <div className="card-1">
        {props.one}
      </div>
      <div className="card-2">
        {props.two}
      </div>
    </section>
  );
};

export default Card;
