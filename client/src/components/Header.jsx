import { useState } from "react";
import Nav from "./Nav";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import SearchInput from "./SearchInput";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const content = (
    <div className="w-full h-56 z-10 absolute bg-primary left-0 right-0">
      <ul className="w-10/12 h-full mx-auto flex flex-col items-start justify-start text-white">
        <Link to="/about" className="my-2" onClick={() => setIsOpen(false)}>
          ABOUT
        </Link>

        <Link to="/best" className="my-2" onClick={() => setIsOpen(false)}>
          BEST ARTICLES
        </Link>

        <Link to="/archive" className="my-2" onClick={() => setIsOpen(false)}>
          ARCHIVE
        </Link>
      </ul>
    </div>
  );
  return (
    <>
      {openSearch ? <SearchInput handleOpenSearch={handleOpenSearch} /> : null}
      <div
        className={`${isOpen && "bg-primary"}  w-full flex items-center h-20`}
      >
        <div className="w-10/12 mx-auto flex items-center justify-between py-4">
          <div className="lg:w-1/4 flex items-center">
            <p className={`${isOpen && "hidden"} text-2xl  tracking-wider`}>
              LO
            </p>
            <span
              className={`${
                isOpen && "hidden"
              } bg-primary text-white text-2xl tracking-wider`}
            >
              GO
            </span>
          </div>
          <div className="lg:w-2/4 hidden lg:block">
            <Nav />
          </div>
          <div className="w-full lg:w-1/4 flex items-center justify-end gap-6">
            <CiSearch
              className={`${isOpen && "hidden"}  text-primary`}
              size={30}
              onClick={handleOpenSearch}
            />
            {!isOpen ? (
              <AiOutlineMenu
                onClick={handleNav}
                className={`lg:hidden text-primary`}
                size={30}
              />
            ) : (
              <HiOutlineXMark
                onClick={handleNav}
                className={`${isOpen && "text-white"} lg:hidden text-primary`}
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && content}
      <Outlet />
    </>
  );
};
export default Header;
