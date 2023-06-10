import React from 'react'
import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
const ReactMarkDownView = ({markdownText}) => {
    hljs.configure({
        // optionally configure hljs
        languages: ["javascript", "python", "c", "c++", "java", "HTML", "css", "matlab"],
      });
  return (
    <div>
         <div className="ql-snow">
            <div className="ql-editor">
              <ReactMarkdown children={markdownText} rehypePlugins={[rehypeRaw]} />
            </div>
          </div>
    </div>
  )
}

export default ReactMarkDownView