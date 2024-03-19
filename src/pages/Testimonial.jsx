import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <section className="relative flex justify-between w-full py-[5vw] px-[8vw]">
      <div className="w-[30%]">
        <div className="flex gap-3">
          <img
            className="w-[4vw] h-[4vw] object-cover rounded-full"
            src="https://images.unsplash.com/photo-1610413507366-d6a23a34ebb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>
            <h1 className="text-xl font-bold">Donald Sullivan</h1>
            <h2 className="text-slate-400">Founder Fiko</h2>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <FaArrowLeftLong />
          <FaArrowRightLong />
        </div>
      </div>
      <div className="w-[70%]">
        <p className="text-xl">
          This travel website is very informative and easy to use. I like how
          they present various destination options and travel packages with
          clear details. Offering pictures and destination descriptions helps me
          decide where I want to visit. Additionally, the ability to compare
          prices and reviews from other users is very helpful in decision
          making.
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
