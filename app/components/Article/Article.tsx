"use client"
import React,{useState,useEffect} from 'react'
import './style.css'
import ArticleCard from './ArticleCard'
import Grid from '@mui/material/Grid'

const Article = () => {
  const articles=[1,3,4,5,6,7,8,9,10,11,12,13,14,15]
   
  return (
    <div style={{width:'97%' }}>
    <Grid container spacing={2} className="article-container center">
      {
        articles.map((article:any)=><Grid item sm={3} md={4} lg={4}><ArticleCard article={article} /></Grid> )
      }

    </Grid>
    </div>
  )
}

export default Article