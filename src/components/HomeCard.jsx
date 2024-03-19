const HomeCard = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col bg-white text-center rounded-lg w-[20vw] py-4 shadow-md relative top-[5vw]">
      <h1 className="text-black text-[2.4vw] font-bold">{title}</h1>
      <h3 className="text-slate-400 text-lg">{subtitle}</h3>
    </div>
  );
};

export default HomeCard;
