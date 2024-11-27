import React from 'react'
import './Table.css'
const Table = ({rows,deleteRow,editRow}) => {

  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                <th>Page</th>
                <th className='expand'>Discription</th>
                <th>status</th>
                <th>Action</th>
                </tr>
            </thead>

            <tbody className='tbody'>
              {rows.map((row,idx)=>{

             const statustext = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                return <tr key={idx}>
                  <td>{row.page}</td>
                  <td className='expand'>{row.description}</td>

                  <td>
                <span className={`label lable-${row.status}`}>{statustext}</span>
            </td>

            <td>
              <span  className='actions'>
              <button className='delete-btn' onClick={()=> deleteRow(idx)}>delete</button><> </>
              <button className='edit-btn' onClick={()=>editRow(idx)}>edit</button>
              </span>
            </td>
                </tr>
              })}
            </tbody>
        </table>
    </div>
  )
}

export default Table