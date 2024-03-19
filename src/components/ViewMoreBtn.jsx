const ViewMoreBtn = ({ center }) => {
  return (
    <button
      className={`rounded-full px-8 py-4 bg-black text-white my-8 relative ${center}`}
    >
      View More
    </button>
  );
};

export default ViewMoreBtn;
