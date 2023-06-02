"use client"
import React from 'react'
import AppMenuBar from '../components/NavBar/AppMenuBar'
import SideBar from '../components/SIdebar/SideBar'
import Box from '@mui/material/Box/Box'
function layout({children}:{children:React.ReactNode}) {
  return (
    <>
        <AppMenuBar/>
        <Box sx={{display:'flex',marginTop:'63px'}}>
        
  {/* <SideBar /> */}
<div style={{marginLeft:'100px'}}>

        {children}
</div>

        </Box>
        
    </>
  )
}

export default layout