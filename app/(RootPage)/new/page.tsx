"use client"
import { SetStateAction, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import hljs from "highlight.js";
import Editor from "@/app/components/posts/Editor";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from 'react-markdown'
const page = () => {
  const[markDownText,setMarkDown]=useState<String>("");
  const handleEditorChange=(event:String)=>{
    setMarkDown(event)

  }
  
 
  // useEffect(() => {
  //   console.log({ markdownText });
  // }, [markdownText]);
  return (
    <main >
      <header className="mt-2">
        <Typography variant="h6">Create a post</Typography>
      </header>
      <article >
        <section className="flex bg-white p-6 shadow-md editor-section">
          <div className="editor-container">
    
          <input type="text" className="text-lg editor-input-title" placeholder="Issue Title..." />
         <Editor markdownText={markDownText} event={handleEditorChange} />

          </div>
          <div className="ql-snow mt-4">
            <div className="ql-editor">
              <ReactMarkdown children={markDownText} rehypePlugins={[rehypeRaw]} />
            </div>
          </div>
          
         
        </section>
      </article>
    </main>
  );
};

export default page;