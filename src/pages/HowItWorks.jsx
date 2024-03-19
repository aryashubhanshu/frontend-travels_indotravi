import Heading from "../components/Heading";
import HowItWorkCard from "../components/HowItWorkCard";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { ImTicket } from "react-icons/im";
import Events from "../components/Events";

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-cover py-[2vw] px-[8vw] mt-[5vw] flex gap-[4vw]">
      <div className="flex flex-col items-center justify-end text-white px-4 py-10 h-[70vh] bg-[url(https://images.unsplash.com/photo-1675230939576-eb5b0bea41d9?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-1/2 rounded-xl bg-cover">
        <Events ml="ml-2" mr="mr-2" />
        <p className="text-center my-2">
          Embark on a journey to discover your dream destination, where
          adventure and relaxation await, creating unforgottable memories along
          the way
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-slate-400">How it works</p>
        <Heading title={"One click for you"} />
        <div className="flex flex-col">
          <HowItWorkCard
            title={"Find your destination"}
            icon={<RiSearch2Line />}
            para={
              "Embark on a journey to discover your dream destination, where adventure and relaxation await."
            }
          />
          <HowItWorkCard
            title={"Book a ticket"}
            icon={<ImTicket />}
            para={
              "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform."
            }
          />
          <HowItWorkCard
            title={"Make payment"}
            icon={<MdOutlinePayments />}
            para={
              "We offer a variety of payment options to meet your preferences and ensure a hassle-free tranaction progress."
            }
          />
          <HowItWorkCard
            title={"Explore destination"}
            icon={<MdTravelExplore />}
            para={
              "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
