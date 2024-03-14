import React, { useEffect, useState } from 'react'
import { getCategorys, updateCategory } from '../services/allApis'
import { deleteCategorys } from '../services/allApis'
import { toast } from 'react-toastify'
import { getSpecificVideo } from '../services/allApis'
import Videocard from './Videocard'
// import { updateCategory } from '../services/allApis'

function Categorylist(addStatus) {
    const [cat, setCat] = useState([])
    const [delStatus, setDelStatus] = useState([])


    useEffect(() => {
        getCat()
    }, [addStatus, delStatus])
    const getCat = async () => {
        const res = await getCategorys()
        console.log(res.data);
        setCat(res.data)
    }

    const handleDelete = async (id) => {
        // console.log(id);
        const res = await deleteCategorys(id)
        // console.log(res);
        if (res.status >= 200 && res.status < 300) {
            // setDelStatus(res)
            toast.success("Category deleted successfully!!")
            setDelStatus(res)
        }
        else {
            toast.error("Category deletion failed!!")
        }
    }

    const handleDrop = async (e, id) => {
        console.log("Category id :" + id);
        const vid = e.dataTransfer.getData("videoId")
        console.log("dropped video id :" + vid);
        let category = cat.find(item => item.id == id)
        console.log(category);
        const res = await getSpecificVideo(vid)
        // console.log(res.data);
        category.videos.push(res.data)
        console.log(category);
        const rescat = await updateCategory(category, id)
        if (rescat.status >= 200 & rescat.status < 300) {
            toast.success(`${res.data.caption} is added to ${category.name}`)
            getCat()
        }
        else {
            toast.error("Video adding to category is failed!!")
        }

    }
    const handleDragOver = (e) => {
        e.preventDefault()
        console.log("dragging over category");
    }

    return (
        <>
            <div className="border border-dark p-3 mt-3">
                {
                    cat ? cat.map(item => (
                        <div className="bg-light mb-3 p-3 rounded shadow" onDragOver={e => { handleDragOver(e) }} droppable onDrop={e => { handleDrop(e, item?.id) }}>
                            <div>
                                <span style={{ color: 'white' }}>{item.name}</span>
                                <i className='fa-solid fa-trash float-end' onClick={() => { handleDelete(item.id) }} style={{ color: "#ef0b0b" }}></i>
                            </div>
                            <div>
                                {
                                    item?.videos.map(v => (
                                        <Videocard video={v} cat={true} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                        :
                        <h1>No categories</h1>
                }

            </div>
        </>
    )
}

export default Categorylist