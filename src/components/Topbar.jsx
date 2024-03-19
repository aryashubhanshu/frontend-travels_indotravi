const Topbar = () => {
  return (
    <nav className="fixed z-10 flex items-center px-4 rounded-full left-1/2 -translate-x-[50%] top-[2vw] h-[2.4vw] backdrop-blur-xl">
      {["Home", "Services", "Tour", "About", "Contact"].map((item, ind) => {
        return (
          <a
            href={`#${item}`}
            key={ind}
            className="text-white px-[2vw] font-bold"
          >
            {item}
          </a>
        );
      })}
    </nav>
  );
};

export default Topbar;
