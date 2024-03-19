import { CiStar } from "react-icons/ci";

const DestinationCard = ({ time, rating, date, destination, price, img }) => {
  return (
    <div
      className="rounded-xl px-8 py-4 flex flex-col items-center justify-between"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between w-full text-white">
        <h3 className="backdrop-blur-xl px-2 py-1 rounded-xl">{time}</h3>
        <h3 className="backdrop-blur-xl text-xl flex gap-2 items-center px-2 py-1 rounded-xl">
          <CiStar />
          {rating}
        </h3>
      </div>
      <div className="flex flex-col justify-between backdrop-blur-xl w-full text-white py-2 px-4 rounded-xl">
        <h1>{date}</h1>
        <div className="flex justify-between w-full text-2xl">
          <h1>{destination}</h1>
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
