
const RestrauruntCard = ({ brandName, brandImage, location}) => {
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg">
        <h2 className="font-bold py-2 text-lg">{brandName}</h2>
        <p>{location?.locationName}</p>
        <img className="rounded-lg" src={brandImage} alt="Food Image" />
      </div>
    );
  };

  export default RestrauruntCard;