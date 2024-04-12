import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <Link
          to="/about"
          className="tracking-[0.30em] text-primary text-sm cursor-pointer"
        >
          ABOUT
        </Link>
        <Link
          to="/best"
          className="tracking-[0.30em] text-primary cursor-pointer"
        >
          BEST ARTICLES
        </Link>
        <Link
          to="/archive"
          className="tracking-[0.30em] text-primary border-2 border-primary px-4 py-2 cursor-pointer"
        >
          ARCHIVE
        </Link>
      </div>
    </>
  );
};
export default Nav;
