import { Link } from "react-router-dom";

const BlogList = ({ title }) => {
  return (
    <div className="w-10/12 flex justify-start my-6">
      <Link className="text-lg font-montserrat">{title}</Link>
    </div>
  );
};
export default BlogList;
