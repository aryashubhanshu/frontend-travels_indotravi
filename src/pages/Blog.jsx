import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import ViewMoreBtn from "../components/ViewMoreBtn";

const Blog = () => {
  return (
    <section className="relative w-full bg-cover py-[2vw] px-[8vw] text-center">
      <p className="text-slate-400">Our Blog</p>
      <Heading title={"Our travel memories"} />
      <div className="grid grid-cols-2 gap-8 my-8">
        <BlogCard
          img="https://images.unsplash.com/photo-1643286918679-dc71941c0c8a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="Nov 14, 2023"
          title="2023 Travel Trends - what you need to know"
          para="2023 taught us valuable life lessons, Plans don't always work out, flexibility in life is key, a..."
        />
        <BlogCard
          img="https://images.unsplash.com/photo-1515049497350-e9dfc9527f5d?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          date="Nov 18, 2023"
          title="Jeep Adventure is a new attraction for tourists visitng Garut"
          para="Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation..."
        />
      </div>
      <ViewMoreBtn />
    </section>
  );
};

export default Blog;
