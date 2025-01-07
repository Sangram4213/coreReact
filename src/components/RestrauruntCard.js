
const RestrauruntCard = ({ brandName, brandImage, location}) => {
  
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg">
        <img className="rounded-lg" src={brandImage} alt="Food Image" />
        <h2 className="font-bold py-2 text-lg">{brandName}</h2>
        <p>{location?.locationName}</p>
      </div>
    );
  };

  export const withPrioriy=(RestrauruntCard)=>{
    return(props)=>{
        return(
          <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Priority</label>
          <RestrauruntCard {...props}/>
          </div>
        )
    }
  }

  export default RestrauruntCard;