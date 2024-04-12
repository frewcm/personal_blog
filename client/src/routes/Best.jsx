import Footer from "../components/Footer";
import PostList from "../components/PostList";
import Skeleton from "../components/Skeleton";
import { useFetch } from "../hooks/useFetch";

const Best = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/get-all-posts"
  );
  return (
    <>
      <div className="w-10/12 mx-auto mb-32">
        <div className="w-full flex flex-col items-start">
          <div className="py-8">
            <p className="text-5xl font-montserrat text-primary">Best blogs</p>
          </div>
          <div className="w-full flex flex-col items-center">
            {loading ? (
              <Skeleton />
            ) : (
              data?.map((post) => {
                return (
                  <PostList
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    catagory={post.catagory}
                    summary={post.summary}
                    content={post.content}
                  />
                );
              })
            )}

            {error && (
              <p className="text-4xl text-primary font-montserrat">
                Error while fetching posts
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Best;
