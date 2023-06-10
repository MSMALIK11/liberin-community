"use client";
import { useState, useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button'
import hljs from "highlight.js";
import Editor from "@/app/components/posts/Editor";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import CompoBox from "@/app/components/Article/CompoBox";
import PostPreview from "@/app/components/posts/PostPreview";
import ModalView from "@/app/components/shared/ModalView";

const initialState = {
  title: "",
  description: "",
  markDownText: "",
  postType: "issue",
};

const NewPost = () => {
  const [markDownText, setMarkDown] = useState<String>("");
  const [post, setPost] = useState(initialState);
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef(null);
  const descriptionRef = useRef(null);
  const [show, setShow] = useState<Boolean>(false)

  const handleEditorChange = (event: String) => {
    setMarkDown(event);
    setPost({ ...post, ['markDownText']: event });


  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height to auto to recalculate the actual content height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height to match the content height
    }
    // if (descriptionRef.current) {
    //   descriptionRef.current.style.height = "auto"; // Reset the height to auto to recalculate the actual content height
    //   descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`; // Set the height to match the content height
    // }
  }, [textareaValue,descriptionRef]);
  useEffect(() => {
  
    if (descriptionRef.current) {
      descriptionRef.current.style.height = "auto"; // Reset the height to auto to recalculate the actual content height
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`; // Set the height to match the content height
    }
  }, [descriptionRef]);

  const handleChange = (event) => {

    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  // useEffect(() => {
  //   console.log({ markdownText });
  // }, [markdownText]);

  const handleSave = () => {
    localStorage.setItem("posts", JSON.stringify(post))
  }


  const handleOpenPreview = () => {
    setShow(true)

  }
  const handleClose = () => {
    setShow(false)

  }
  return (
    <main>
      {/* preview modal */}
      <ModalView open={show} handleClose={handleClose}>
        <div className="preview">

          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body2">{post.description}</Typography>
          <div className="ql-snow mt-4">
            <div className="ql-editor">
              <ReactMarkdown
                children={post.markDownText}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
          </div>
</div>


      </ModalView>
     

      <header className="mt-2 flex items-between editor-header">
        <Typography variant="h6">Create a post</Typography>
        <div>
          <div className="compobox header-action">
            <CompoBox />
            <div className="flex gap-2">
              <Button variant="contained" className="block" color="secondary" onClick={handleOpenPreview} >Preview</Button>
              <Button variant="contained" className="block" onClick={handleSave}  >Publish</Button>
            </div>
          </div>


        </div>
      </header>
      <article>

      <div className="editor-container flex flex-wrap">

        <section className="flex bg-white p-6 shadow-md editor-section">
          <div className="editor-container">
            {/* title */}
            <div className="title desc">
              <textarea
                ref={textareaRef}
                value={post.title}
                onChange={handleChange}
                name="title"
                className="text-lg editor-input-title"
                placeholder="Issue Title..."
              >
                <div
                  ref={textareaRef}
                  style={{ visibility: "hidden", whiteSpace: "pre-wrap" }}
                >
                  {post.title}
                </div>
              </textarea>

            </div>
            <div className="description" style={{width:'100%'}}>
              {/* description */}
              <div className="desc">
                <textarea
                  ref={descriptionRef}
                  value={post.description}
                  name="description"
                  onChange={handleChange}
                  className="text-lg editor-description"
                  placeholder="Write  description"
                >
                  <div
                    ref={textareaRef}
                    style={{ visibility: "hidden", whiteSpace: "pre-wrap" }}
                  >
                    {post.description}
                  </div>
                </textarea>
              </div>
            </div>

            <Editor markdownText={markDownText} event={handleEditorChange} />
          </div>

        </section>
        {/* live preview */}
        <div className="live-container sm:mt-6 lg:mt-0 md:mt-0 ">
        <div className="ql-snow mt-4">
          <div className="ql-editor">
<Typography variant="body" className="bold mb-6">Live Preview</Typography>
            <Typography as="h1">{post.title}</Typography>
            <Typography>{post.description}</Typography>
            <ReactMarkdown
              children={markDownText}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
        </div>
      </div>
      </article>
    </main>
  );
};

export default NewPost;
