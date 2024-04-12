import "./editor.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import { useEffect, useRef } from "react";

const Editor = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "text-3xl font-bold text-primary",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "ml-6 pl-4 list-disc",
          },
        },
        OrderedList: {},
      }),
      Underline.configure({
        HTMLAttributes: {
          class: "underline",
        },
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: "bg-yellow-500",
        },
      }),
    ],
    content: content,
    editable: true,
    editorProps: {
      attributes: {
        class: "p-4 text-lg border-2 border-primary rounded",
      },
    },

    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const contentSet = useRef(false);

  useEffect(() => {
    // Ensure the editor instance exists and has not been destroyed
    if (editor && !editor.isDestroyed) {
      // Check if there's a value to set and if it hasn't been set already
      if (content && !contentSet.current) {
        // Set the editor content using the provided value
        editor.commands.setContent(content);

        // Update the flag to prevent setting the content multiple times
        contentSet.current = true;
      }
    }
  }, [editor, content]);

  return (
    <div className="w-full">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
