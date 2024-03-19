import { FaChevronDown } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";

const Events = ({ ml, mr }) => {
  return (
    <div className="flex w-fit backdrop-blur-xl rounded-full items-center justify-between px-2 py-1">
      <div className={`flex gap-4 items-center cursor-pointer ${ml}`}>
        <IoCalendarOutline /> Date <FaChevronDown /> |
      </div>
      <div className={`flex gap-4 items-center cursor-pointer ${ml}`}>
        <IoCalendarOutline />
        Budget
        <FaChevronDown /> |
      </div>
      <div className={`flex gap-4 items-center cursor-pointer ${ml} ${mr}`}>
        <IoCalendarOutline /> Guest <FaChevronDown />
      </div>
      <button className="bg-white text-black rounded-full px-8 py-4">
        Search
      </button>
    </div>
  );
};

export default Events;
