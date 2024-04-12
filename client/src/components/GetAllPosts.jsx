import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import PostList from "./PostList";
import Skeleton from "./Skeleton";

const GetAllPosts = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/get-all-posts"
  );

  return (
    <div className="w-10/12 mx-auto mb-32">
      <div className="w-full flex flex-col items-start">
        <p className="mb-2 text-2xl text-primary font-montserrat">
          All of my posts up to now
        </p>
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
  );
};
export default GetAllPosts;
