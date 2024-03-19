const HowItWorkCard = ({ icon, title, para }) => {
  return (
    <div className="flex items-center gap-4 px-2 py-6">
      <div className="text-[1.4vw] bg-zinc-200 flex items-center justify-center w-[3vw] h-[2.4vw] rounded-md">
        {icon}
      </div>
      <div className="flex flex-col">
        <h1 className="text-black text-xl">{title}</h1>
        <p className="text-slate-400 w-[90%]">{para}</p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
