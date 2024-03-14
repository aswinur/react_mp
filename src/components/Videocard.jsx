import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVedio } from '../services/allApis';
import { toast } from 'react-toastify';
import { addHistory } from '../services/allApis';

function Videocard({video,setDelStatus,cat}) {
    const [show, setShow] = useState(false);
    const [history, setHistory] = useState({
        caption:video.caption,url:video.url,datetime:''
    });

    const handleOnDrag=(e,id)=>{
        console.log("Video is dragging : id :"+id);
        e.dataTransfer.setData("videoId",id)
    }

    const handleClose = () => {
       addHistory(history)
        setShow(false);
    }
    const handleShow = () =>{
        const dt=new Date
        setHistory({...history,datetime: new Date()})
        // console.log(history);
         setShow(true);
    }

    const handleDelete=async(id)=>{
        // console.log(id);
        const res=await deleteVedio(id)
        // console.log(res);
        if (res.status>=200 && res.status<300) {
            setDelStatus(res)
            toast.success("video deleted successfully!!") 
        }
        else{
            toast.error("Video deletion failed!!")
        }
    }
    return (
        <>
            <Card style={cat?{width:'10rem'}:{ width: '13rem'  }} className='mb-3 ms-3' draggable onDragStart={(e)=>handleOnDrag(e,video?.id)}>
                <Card.Img variant="top" src={video.image } onClick={handleShow} className='img-fluid'/>
                <Card.Body className='d-flex flex-row justify-content-between'>
                    <Card.Title>{video.caption}</Card.Title>
                    {
                        !cat&&
                      <i className='fa-solid fa-trash' onClick={()=>{handleDelete(video.id)}} style={{ color: "#ef0b0b" }}></i>

                    }
                </Card.Body>
            </Card>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                 </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Videocard

