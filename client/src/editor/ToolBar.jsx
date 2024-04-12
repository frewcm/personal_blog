import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaRedo,
  FaUndo,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaUnderline,
  FaHighlighter,
} from "react-icons/fa";

const ToolBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="h-10 flex items-center gap-6 justify-between">
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaBold />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaItalic />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={
            editor.isActive("underline")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaUnderline />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().chain().focus().toggleHighlight().run()}
          className={
            editor.isActive("highlight")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaHighlighter />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaStrikethrough />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaHeading />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaListUl />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaListOl />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive("blockquote")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaQuoteLeft />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={
            editor.isActive("undo")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaUndo />
        </button>
      </div>
      <div className="w-20 h-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={
            editor.isActive("redo")
              ? "w-5 h-5 bg-primary text-white p-1 rounded flex items-center justify-center"
              : ""
          }
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
};
export default ToolBar;
