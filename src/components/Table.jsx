import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Words } from "../words";






const TableU = ({data}) => {


  return (
    <TableContainer component={Paper} sx={{ width:1200, margin: "auto"  }} >
      <Table size="large" sx={{ 
        }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Luganda</TableCell>
            <TableCell align="left">English</TableCell>
            <TableCell align="left">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((row) => (

          /*{rows.map((row) => (*/
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.luganda}</TableCell>
              <TableCell align="left">{row.english}</TableCell>
              <TableCell align="left">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      )
    }
    
    export default TableU

    /*
    <table>
      <tbody>
        <tr>
          <th>Luganda</th>
          <th>English</th>
          <th>Info</th>
        </tr>
        {data.map((item) => (
        <tr key={item.id}>
          <td>{item.luganda}</td>
          <td>{item.english}</td>
          <td>{item.info}</td>
        </tr>
        ))}

      </tbody>
    </table>
    */
