const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
