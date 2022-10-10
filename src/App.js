import "./app.css";
import { Words } from "./words";
import React, { useEffect, useState } from "react";
import TableU from "./components/Table";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Header from "./components/Header";





function App() {
  const font =  "'Quicksand', sans-serif";
  const theme = createTheme({

    typography: {
      fontFamily: font,
      fontSize: 17,
      },
    });  

  const [query, setQuery]
 = useState("");

const search = (data) => {
  return data.filter((item) =>
  item.luganda.toUpperCase().includes(query) ||
  item.luganda.toLowerCase().includes(query) ||
  item.english.toUpperCase().includes(query) ||
  item.english.toLowerCase().includes(query) ) ;

};

   return (
    <div >
      <ThemeProvider theme={theme} >
      <CssBaseline />
<Header/>      
        
<TextField  id="outlined-basic" placeholder="Search..." label="working search bar" variant="outlined" onChange={e=> setQuery(e.target.value)} />

<TableU data={search(Words)}  />
</ThemeProvider>

</div>
  );
}

export default App;
