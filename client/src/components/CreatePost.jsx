import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import { FaSpinner } from "react-icons/fa";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [catagory, setCatagory] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(content);

  const token = localStorage.getItem("token");

  const handleBlogPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/post",
        {
          title,
          catagory,
          summary,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        navigate("/admin/posts");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full mb-24">
      <form className="w-10/12 mx-auto flex flex-col justify-start gap-4">
        <div className="flex flex-col justify-start">
          <label className="text-primary tracking-widest">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="placeholder:text-sm h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2 border-2 border-secondary rounded"
            type="text"
            placeholder="Title..."
          />
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-primary tracking-widest ">Catagory</label>
          <input
            onChange={(e) => setCatagory(e.target.value)}
            className="placeholder:text-sm h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2 border-2 border-secondary rounded"
            type="text"
            placeholder="Catagory..."
          />
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-primary tracking-widest">Summary</label>
          <input
            onChange={(e) => setSummary(e.target.value)}
            className="placeholder:text-sm h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2 border-2 border-secondary rounded"
            type="text"
            placeholder="Summary..."
          />
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-primary tracking-widest">Content</label>
          <Editor content={content} setContent={setContent} />
        </div>
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={handleBlogPost}
            className="text-white bg-secondary rounded w-28 h-10 flex items-center justify-center"
          >
            {loading ? <FaSpinner /> : "Create blog"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
