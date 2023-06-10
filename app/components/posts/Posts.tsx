"use client"
import React,{useState,useEffect} from 'react'
import PostCard from './Card'

const Posts = () => {
  const[posts,setPosts]=useState([])
    const[isLoading,setIsLoading]=React.useState(false)
    useEffect(()=>{
        setTimeout(()=>{
          setIsLoading(false)
      
        },2000);
        const posts_data=JSON.parse(localStorage.getItem('posts'));
        setPosts([posts_data])
        console.log('postss',posts)
      
      }),[]
  return (
    <div className='flex-col '>
          {
        posts?.map((post,index)=>{
          return(
            <PostCard key={index} isLoading={isLoading} post={post} />
          )
        })
        
      }
    </div>
  )
}

export default Posts