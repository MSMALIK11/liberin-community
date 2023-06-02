"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Article from '../Article/Article';
import Posts from '../posts/Posts';
const posts=[1,2,3,4,5,6,7,8,22,30,40,55,46,323]
const type=["ISSUES","ARTICLE"];
export default function TabControl() {
  const [value, setValue] = React.useState('ISSUES');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
         {
          type.map((cat)=> <Tab value={cat} label={cat} />)
        }
       
      </Tabs>
      <section className='mt-2s'> 

{
    value==="ARTICLE" &&  <Article />
}
{
    value==="ISSUES" && <Posts post={posts} />
}
      </section>
    </Box>
  );
}
