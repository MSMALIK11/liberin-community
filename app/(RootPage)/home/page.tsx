"use client"
import React, { useState,useEffect } from 'react'
import PostCard from '@/app/components/posts/Card'
import Chips from '@/app/components/posts/Chips';
import{Card, CardContent}from '@mui/material'
import Typography from '@mui/material/Typography/Typography';
import Skeleton from '@mui/material/Skeleton';
import TabControl from '@/app/components/shared/TabControl';
const Home = () => {
  return (
<div className='flex mt-4'>
    <div className='flex-col'>
      <TabControl/>
     
    </div>
    
    
</div>
    
  )
}

export default Home