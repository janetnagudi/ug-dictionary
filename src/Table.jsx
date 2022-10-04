import React from 'react'
import { Words } from "./words";


const Table = ({data}) => {
  return (
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
  )
}

export default Table