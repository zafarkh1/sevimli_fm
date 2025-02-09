const Card = ({ ...props }) => {
  console.log(props);

  return (
    <div>
      <img src={props.img} alt={props.name} className="lg:mb-6 mb-2" />
      <h6 className="lg:text-xl text-base font-semibold mb-1">{props.name}</h6>
      <p className="lg:text-lg text-xs text-primary lg:mb-4 mb-3">
        {props.job}
      </p>
      <p className="lg:text-base text-[13px] lg:leading-6 leading-4">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
