import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="my-8 w-full flex items-center justify-center gap-8 text-secondary">
        <Link className="hover:underline" to="create-post">
          Create a post
        </Link>
        <Link className="hover:underline" to="posts">
          All posts
        </Link>
        <button className="hover:underline" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Outlet />
    </>
  );
};
export default AdminNav;
