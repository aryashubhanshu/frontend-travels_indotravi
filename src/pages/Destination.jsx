import DestinationCard from "../components/DestinationCard";
import Heading from "../components/Heading";
import ViewMoreBtn from "../components/ViewMoreBtn";

const Destination = () => {
  return (
    <section className="relative w-full bg-cover py-[2vw] px-[8vw] mt-[5vw]">
      <p className="text-slate-400">Tour packages</p>
      <div className="flex items-center justify-between w-full">
        <Heading title="Our tourist destination" />
        <p className="text-slate-400 w-1/3">
          Our tourist destinations offer an unrivaled blend of natural beauty
          and cultural richness
        </p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 h-[60vh] w-full">
        <DestinationCard
          time="7 Days"
          rating="4.9"
          date="23 AUGUST - 29 AUGUST"
          destination="Bali Tour Package"
          price="$285"
          img="https://images.unsplash.com/photo-1529406847391-d0f9def0c540?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <DestinationCard
          time="5 Days"
          rating="4.9"
          date="23 AUGUST - 27 AUGUST"
          destination="Java Tour Package"
          price="$218"
          img="https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <DestinationCard
          time="3 Days"
          rating="4.9"
          date="23 AUGUST - 25 AUGUST"
          destination="Solo Tour Package"
          price="$163"
          img="https://images.unsplash.com/photo-1551655510-555dc3be8633?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <ViewMoreBtn center="left-1/2 -translate-x-[50%]" />
    </section>
  );
};

export default Destination;
