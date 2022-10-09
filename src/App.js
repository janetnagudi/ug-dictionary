import "./app.css";
import { Words } from "./words";
import React, { useEffect, useState } from "react";
import TableU from "./Table";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';




function App() {
  const font =  "'Quicksand', sans-serif";
  const theme = createTheme({

    typography: {
      fontFamily: font,
      },
    });  

  const [query, setQuery]
 = useState("");

const search = (data) => {
  return data.filter((item) => item.luganda.toLowerCase().includes(query) ||
  item.english.toLowerCase().includes(query));

};

   return (
    <div className="the-app" >
      <ThemeProvider theme={theme} >
      <CssBaseline />
        
<TextField  id="outlined-basic" placeholder="Search..." label="Outlined" variant="outlined" onChange={e=> setQuery(e.target.value)} />
<TableU className="my-app" data={search(Words)} />
</ThemeProvider>

    </div>
  );
}

export default App;
