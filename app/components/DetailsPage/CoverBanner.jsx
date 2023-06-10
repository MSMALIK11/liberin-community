"use client";
import React, { useEffect, useState } from "react";
import coverImage from "../../Assets/coverImage.webp";
import Image from "next/image";
import Author from "../DetailsPage/Author";
import AuthorDetailsCard from './AuthorDetailsCard'
import "./style.css";
import ActionSideBar from "./ActionSideBar";
import { Typography } from "@mui/material";
import ReactMarkDownView from "../shared/ReactMarkDownView";
const CoverBanner = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    setPost(posts);
  }, []);
  console.log("posts", post);
  return (
    <div className="cover-banner-container mt-6">
      {/* <div className="sideBar">
            <ActionSideBar />
        </div> */}
      <div className="left-content">
        <Image src={coverImage} alt="cover image" />

        <Author />
        <div className="article mx-4 mb-4">
          <Typography className="article-title" variant="h4">
            {post?.title}
          </Typography>
          <Typography className="article-title" variant="body">
            {post?.description}
          </Typography>
          <div className="markdown-content">
            <ReactMarkDownView markdownText={post?.markDownText} />
          </div>
        </div>
      </div>
      <div className="right-content">
      <AuthorDetailsCard/>
      </div>
    </div>
  );
};

export default CoverBanner;
