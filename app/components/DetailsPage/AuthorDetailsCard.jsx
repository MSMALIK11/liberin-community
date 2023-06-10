import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {green} from '@mui/material/colors'
import { Button, Typography } from '@mui/material';
const userDetails=[
    {
        location:'India'
    },
    {
        work:'Software Engineer at Liberin Technology'
    },
    {
        Joined:'July 4, 2022'
    }
]
const AuthorDetailsCard = () => {
  return (
    <div className="bg-white shadow-sm details-card-wraper rounded">
        <div className="black-box-container posititon relative">
            <div className="black-box h-8 bg-orange-950" ></div>
            <div className="author">
            <List >
      <ListItem>
        <ListItemAvatar>
        <Avatar sx={{ bgcolor: green[500],fontSize:'16px',marginTop:'-40px' }}>MS</Avatar>
          
        </ListItemAvatar>
        <ListItemText primary="MR. SHOAIB" sx={{marginTop:'-10px'}}  />
      </ListItem>
     
     
    </List>

            </div>

        </div>

      <div className="px-4 pb-6">
        <Typography variant='body' className='text-justify text-[#575757]'>Softwaer Engineer, I've been working with ReactJS for 1+ years. I have gained valuable knowledge and skills in developing web applications using this popular JavaScript library </Typography>

        <div className="details mt-4">
{userDetails.map((user, index) => (
        <div key={index} className='mb-2'>
          {Object.entries(user).map(([key, value]) => (
            <div key={key}>
              <label className='font-bold label-sm   text-[#525252] ' htmlFor={key}>{key}:</label>
              <Typography className='label-subtext'>{value}</Typography>
            </div>
          ))}
        </div>
      ))}
</div>
      </div>





    </div>
  )
}

export default AuthorDetailsCard