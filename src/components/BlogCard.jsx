const BlogCard = ({ img, date, title, para }) => {
  return (
    <div className="rounded-xl flex flex-col shadow-lg overflow-hidden">
      <div
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[30vh]"
      ></div>
      <div className="flex flex-col gap-2 px-4 py-2 items-start">
        <h3 className="text-slate-400">{date}</h3>
        <h1 className="text-2xl font-bold text-left w-[70%]">{title}</h1>
        <p className="text-slate-400 text-left w-[80%]">{para}</p>
      </div>
    </div>
  );
};

export default BlogCard;
