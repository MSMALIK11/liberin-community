"use client"
import {ThemeProvider } from '@mui/material/styles';
import { dark } from './theme';
import { light } from './theme';
import { CssBaseline } from '@mui/material';
export default function Palette({children}:{children:React.ReactNode}) {
    return (
      <ThemeProvider theme={light}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    );
  }