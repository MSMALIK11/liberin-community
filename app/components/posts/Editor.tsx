"use client"
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import ReactQuill from "react-quill";


import eventTypes from '../../../types/types.d'
type CreatePostProps = {};

hljs.configure({
  // optionally configure hljs
  languages: ["javascript", "python", "c", "c++", "java", "HTML", "css", "matlab"],
});

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block","image"],

  [{ list: "ordered" }, { list: "bullet" }],
  ["link"],
  [{ indent: "-1" }, { indent: "+1" }],

  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ align: [] }],
];
const modules = {
  syntax: {
    highlight: function (text: string) {
      return hljs.highlightAuto(text).value;
    },
  },
  toolbar: toolbarOptions,
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
];

const placeholder = "Description";

const Editor = ({markdownText,event}:eventTypes) => {
 
  useEffect(() => {
    console.log({ markdownText });
  }, [markdownText]);
  return (
    <main >
    
      <article >
        <section className="flex bg-slate-200">
    
          <ReactQuill
            // value={markdownText}
            onChange={event}
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder={placeholder}
          />
          <div className="ql-snow">
            {/* <div className="ql-editor">
              <ReactMarkdown children={markdownText} rehypePlugins={[rehypeRaw]} />
            </div> */}
          </div>
          
         
        </section>
      </article>
    </main>
  );
};

export default Editor;