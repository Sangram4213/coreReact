const RestrauruntCard = ({ itemName, image, rating }) => {
    return (
      <div className="card">
        <img src={image} alt="Burger Image" />
        <h2>{itemName}</h2>
        <h4>{rating}</h4>
      </div>
    );
  };

  export default RestrauruntCard;