import Heading from "../components/Heading";
import LocationCard from "../components/LocationCard";

const Location = () => {
  return (
    <section className="relative w-full bg-cover py-[2vw] px-[8vw] mt-[5vw]">
      <p className="text-slate-400">Best location</p>
      <div className="flex items-center justify-between w-full">
        <Heading title="Indonesian tourism" />
        <p className="text-slate-400 w-1/3">
          Extraordinary natural beauty, enjoy the rich culture, <br />
          and experience the friendliness of local people.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-5 grid-rows-2 gap-4 h-[80vh] w-full">
        <LocationCard
          className="col-span-3 row-span-1"
          title={"Bromo Tengger Tour"}
          location={"Bromo, East Java"}
          imgLink="https://images.unsplash.com/photo-1534227749049-06c3ed80963c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <LocationCard
          className="col-span-2 row-span-1"
          title={"Bali Beach Tourism"}
          location={"Denpasar, Bali"}
          imgLink="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <LocationCard
          className="col-span-2 row-span-2"
          title={"Lampung, South Sumatra"}
          location={"Sumatra Tourism"}
          imgLink="https://images.unsplash.com/photo-1642055910234-decf133c25d5?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <LocationCard
          className="col-span-3 row-span-2"
          title={"Borobudur Temple Tour"}
          location={"Jogakarta, Central Java"}
          imgLink="https://images.unsplash.com/photo-1631340729644-8b8aad1e9dba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
};

export default Location;
