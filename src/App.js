import "./app.css";
import { Words } from "./words";
import React, { useEffect, useState } from "react";
import TableU from "./Table";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';




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
    <div className="my-app">
      <ThemeProvider theme={theme}>
        
        <input type="text" placeholder="Search..." className="my-app" onChange={e=> setQuery(e.target.value)}
/>
<TableU data={search(Words)} />
</ThemeProvider>

    </div>
  );
}

export default App;
