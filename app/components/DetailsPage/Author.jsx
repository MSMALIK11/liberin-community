"use client"
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {green} from '@mui/material/colors'
const Author = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
        <Avatar sx={{ bgcolor: green[500],fontSize:'16px' }}>MS</Avatar>
          
        </ListItemAvatar>
        <ListItemText primary="MR. SHOAIB" secondary="Posted on Jun 9" />
      </ListItem>
     
     
    </List>
  )
}

export default Author