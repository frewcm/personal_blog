import { HiOutlineXMark } from "react-icons/hi2";

const SearchInput = ({ handleOpenSearch }) => {
  return (
    <div className="w-full h-20 z-50 bg-white absolute top-0 left-0 right-0 py-4 flex items-center">
      <form className="w-10/12 mx-auto flex items-center gap-2">
        <input
          className="pl-2 w-full h-8 rounded focus:outline-none border-2 border-primary/50 text-lg text-primary "
          type="text"
          placeholder="Search"
        />
        <button className="px-2 h-8 border-2 border-primary/50 text-primary">
          SEARCH
        </button>
        <HiOutlineXMark
          className="ml-4 cursor-pointer"
          onClick={handleOpenSearch}
          size={40}
        />
      </form>
    </div>
  );
};
export default SearchInput;
