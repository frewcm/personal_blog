import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import { useFetch } from "../hooks/useFetch";

const Archive = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api//get-all-posts"
  );
  return (
    <>
      <div className="w-11/12 mx-auto pt-12">
        <div className="py-8">
          <p className="text-5xl font-montserrat text-primary">Articles</p>
        </div>
        <div className="grid grid-cols-3 mb-24">
          {data.map((blog) => {
            return <BlogList key={blog._id} {...blog} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Archive;
