const LocationCard = ({ imgLink, title, location, className }) => {
  return (
    <div
      className={`flex flex-col justify-end rounded-xl bg-cover p-8 shadow-xl ${className}`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <h3 className="text-zinc-200">{location}</h3>
      <h1 className="text-white font-semibold text-xl">{title}</h1>
    </div>
  );
};

export default LocationCard;
