
const RestrauruntCard = ({ brandName, brandImage, location}) => {
    return (
      <div className="card">
        <h2>{brandName}</h2>
        <p>{location?.locationName}</p>
        <img src={brandImage} alt="Food Image" />
      </div>
    );
  };

  export default RestrauruntCard;