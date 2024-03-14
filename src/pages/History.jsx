import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'
import Table from 'react-bootstrap/Table';
import { deleteHis } from '../services/allApis';
import { toast } from 'react-toastify';


function History() {
  const [his, setHis] = useState([])
  const [delStatus, setDelStatus] = useState([])

  useEffect(() => {
    getData()
  }, [delStatus])

  const getData = async () => {
    const res = await getHistory()
    console.log(res.data);
    setHis(res.data)
  }


  const handleDelete = async (id) => {
    // console.log(id);
    const res = await deleteHis(id)
    // console.log(res);
    if (res.status >= 200 && res.status < 300) {
      // setDelStatus(res)
      toast.success("History deleted successfully!!")
      setDelStatus(res)
    }
    else {
      toast.error("History deletion failed!!")
    }
  }
  return (
    <>
      <h1>Watch History</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Caption</th>
            <th> URL</th>
            <th>Date Time</th>
            <th>Remove history</th>
          </tr>
        </thead>
        <tbody>
          {
            his ?
              his.map(item => (
                <tr>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <i className='fa-solid fa-trash ' onClick={() => { handleDelete(item.id) }} style={{ color: "#ef0b0b" }}></i>
                  </td>
                </tr>
              ))
              :
              <tr>
                <p>No watch history</p>
              </tr>
          }


        </tbody>
      </Table>

    </>
  )
}

export default History