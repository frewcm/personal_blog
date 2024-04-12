import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { FaRegEdit } from "react-icons/fa";

const PostPage = () => {
  const { id } = useParams();
  const post = useFetch(`http://localhost:5000/api/get-post/${id}`);
  const { data, loading, error } = post;

  let auth = localStorage.getItem("token");

  return (
    <>
      {loading ? (
        <p className="text-7xl font-montserrat">Loading...</p>
      ) : (
        <div className="w-10/12 mx-auto pt-12 flex flex-col">
          <div className="py-8">
            <p className=" text-4xl font-montserrat">{data?.title}</p>
            <div className="my-12 flex gap-4 items-center">
              <img
                className="rounded-full w-12 h-12 object-cover"
                src="/OIP.jpg"
                alt="profile image"
              />
              <p className="text-sm tracking-widest">
                {data.author?.first_name} <span>{data?.author?.last_name}</span>
              </p>
            </div>
            <time className="text-sm tracking-widest">
              {data.createdAt ? format(data?.createdAt, `MMMM d, yyyy`) : ""}
            </time>
            {auth && (
              <Link
                className="flex items-center justify-center w-14  text-sm tracking-widest bg-teritiary cursor-pointer"
                to={`/admin/posts/${id}/update`}
              >
                Edit
                <span className="ml-1">
                  <FaRegEdit />
                </span>
              </Link>
            )}
            <div className="w-full mt-2 mb-6 ">
              <div
                className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto first-letter:text-7xl  first-letter:font-montserrat first-letter:float-left first-letter:mr-4 text-lg tracking-wide leading-8 space-y-6"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PostPage;
