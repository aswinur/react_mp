import React, { useState,useEffect } from 'react'
import Videocard from './Videocard'
import { getVideos } from '../services/allApis'

function Videos({addStatus}) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState([])

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  const getData=async()=>{
    const res=await getVideos()
    // console.log(res.data);
    setAllVideos(res.data)
    // console.log(allVideos);
  }

  return (
    <div className="bg-light border border-3 border-dark p-5 row ">
      {
        allVideos?
        allVideos.map(item=>(
          <Videocard video={item} setDelStatus={setDelStatus}/>
        ))
        :
        <h1>No Videos</h1>
      }
     
    </div>
  )
}

export default Videos