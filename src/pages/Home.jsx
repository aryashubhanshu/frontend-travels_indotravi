import Topbar from "../components/Topbar";

import { IoCalendarOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import HomeCard from "../components/HomeCard";
import Events from "../components/Events";

const Home = () => {
  return (
    <section className="relative w-full h-[100vh] bg-home bg-cover py-[2vw] px-[4vw]">
      <Topbar />
      <header className="relative flex flex-col items-center justify-between w-full h-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-white font-bold text-xl">INDOTRAVI</h1>
          <button className="bg-white text-black rounded-full px-4 py-1">
            Login
          </button>
        </div>
        <div className="text-center text-white flex flex-col items-center">
          <h1 className="text-[6vw] font-semibold leading-none">
            Extraordinary natural and cultural charm
          </h1>
          <p className="text-xl mt-2 mb-4">
            Exploring Indonesia is an unforgottable adventure
          </p>
          <Events ml="ml-10" mr="mr-10" />
        </div>
        <div className="flex items-center gap-[1.6vw]">
          <HomeCard title={"10M+"} subtitle={"Total customers"} />
          <HomeCard title={"09+"} subtitle={"Years of Experience"} />
          <HomeCard title={"12K"} subtitle={"Total Destinations"} />
          <HomeCard title={"5.0"} subtitle={"Average Rating"} />
        </div>
      </header>
    </section>
  );
};

export default Home;
