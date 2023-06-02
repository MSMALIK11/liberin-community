"use client"
import React,{useState,useEffect} from 'react'
import PostCard from './Card'

const Posts = ({post}) => {
    const[isLoading,setIsLoading]=React.useState(false)
    useEffect(()=>{
        setTimeout(()=>{
          setIsLoading(false)
      
        },2000)
      
      }),[]
  return (
    <div className='flex-col '>
          {
        post.map((pos)=>{
          return(
            <PostCard key={pos} isLoading={isLoading} />
          )
        })
        
      }
    </div>
  )
}

export default Posts