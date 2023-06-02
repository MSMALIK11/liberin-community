import React from 'react'
import { styled, alpha } from '@mui/material/styles';
const Box = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.dark,
padding:'20px',
minWidth:'30vw',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
const LoginWraper = ({children}:{children:React.ReactNode}) => {
    
  return (
    <div><Box>{children}</Box></div>
  )
}

export default LoginWraper