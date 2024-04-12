import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../editor/Editor";
import { FaSpinner } from "react-icons/fa";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [catagory, setCatagory] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get(`http://localhost:5000/api/get-post/${id}`).then((res) => {
      setTitle(res.data.title);
      setCatagory(res.data.catagory);
      setSummary(res.data.catagory);
      setContent(res.data.content);
    });
  }, []);

  const handleBlogUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const response = await axios.put(
        "http://localhost:5000/api/post/update",
        {
          id,
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
        setUpdating(false);
      }
    } catch (err) {
      console.log(err);
      setUpdating(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setDeleting(true);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/post/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        navigate("/admin/posts");
        setDeleting(false);
      }
    } catch (err) {
      console.log(err);
      setDeleting(false);
    }
  };

  return (
    <>
      <div className="w-full mb-24">
        <form className="w-10/12 mx-auto flex flex-col justify-start gap-4">
          <div className="flex flex-col">
            <label className="text-primary tracking-widest">Title</label>
            <input
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
              className="placeholder:text-sm h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2 border-2 border-secondary rounded"
              type="text"
              placeholder="title"
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-primary tracking-widest ">Catagory</label>
            <input
              value={catagory || ""}
              onChange={(e) => setCatagory(e.target.value)}
              className="placeholder:text-sm h-10 w-full bg-primary/10 focus:outline-none tracking-widest text-primary pl-2 border-2 border-secondary rounded"
              type="text"
              placeholder="Catagory..."
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-primary tracking-widest">Summary</label>
            <input
              value={summary || ""}
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
            <div className="w-2/3 flex justify-end">
              <button
                onClick={handleBlogUpdate}
                className="text-white bg-secondary rounded w-28 h-10 flex items-center justify-center mr-20"
              >
                {updating ? <FaSpinner /> : "Update blog"}
              </button>
            </div>
            <div className="w-1/3 flex justify-end">
              <button
                onClick={handleDelete}
                className="text-primary bg-teritiary px-1 cursor-pointer w-28 h-10 flex items-center justify-center"
              >
                {deleting ? <FaSpinner /> : "delete blog"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePost;
