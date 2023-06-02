"use client"
import React from 'react'
import Chip from '@mui/material/Chip/Chip';
const Chips = ({label}:{label:string}) => {
  return (
    <Chip size='small' label={label} sx={{marginTop:'5px'}} />
  )
}

export default Chips;