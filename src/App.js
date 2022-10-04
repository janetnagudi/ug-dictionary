import "./app.css";
import { Words } from "./words";
import React, { useEffect, useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery]
 = useState("");

const search = (data) => {
  return data.filter((item) => item.luganda.toLowerCase().includes(query) ||
  item.english.toLowerCase().includes(query));

};
   return (
    <div className="app">
<input type="text" placeholder="Search..." className="search" onChange={e=> setQuery(e.target.value)}
/>
<Table data={search(Words)} />


    </div>
  );
}

export default App;
