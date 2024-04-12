import { Link } from "react-router-dom";

const PostList = ({ id, title, catagory, summary, content }) => {
  return (
    <>
      <div className="w-full py-2 my-1">
        <Link to={`/posts/${id}`}>
          <p className="text-primary text-lg underline after:bg-teritiary after:w-2 after:h-2">
            {title}
          </p>
        </Link>
      </div>
    </>
  );
};
export default PostList;
