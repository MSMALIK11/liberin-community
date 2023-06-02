"use client"
import React, { useEffect } from 'react'
import PostCard from '@/app/components/posts/Card'
import Chips from '@/app/components/posts/Chips';
import{Card, CardContent}from '@mui/material'
import Typography from '@mui/material/Typography/Typography';
import Skeleton from '@mui/material/Skeleton';
import TabControl from '@/app/components/shared/TabControl';
const page = () => {
  const[isLoading,setIsLoading]=React.useState(false)

  const posts=[1,2,3,4,5,6,7,8,22,30,40,55,46,323]
  const category=["Web Development","Software Development","Trending","Most Popular","Recent"]
  useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
    
      },2000)
    
    }),[]



  return (
<div className='flex mt-4'>
    <div className='flex-col'>
      <TabControl/>
     
    </div>
    
    
</div>
    
  )
}

export default page