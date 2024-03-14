import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
// import Card from 'react-bootstrap/Card'
import Categorylist from './Categorylist';

function Categories() {
  const [category,setCategory]=useState({
    name:'' ,videos:[]
  })
  const [addStatus,setAddStatus]=useState({})

  const[show,setShow]=useState(false)
  const getCategory=(val)=>{
    if(val){
      setCategory({...category,name:val})
    }
  }

  const handleAdd=async()=>{
    console.log(category);
    if(category.name){
      const res =await addCategory (category)
      if(res.status>=200 && res.status<300){
        toast.success("Category added successfully")
        handleClose()
        setAddStatus(res.data)
      }
      else{
        toast.error("Category adding failed")
      }
    }
    else{
      toast.info("Enter valid data")
    }
  }

  // const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCategory({
      name:'',videos:[]
    })
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-grid">
        <Button variant='primary' className='btn' onClick={handleShow}>Add category</Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Category name</Form.Label>
              <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>{getCategory(e.target.value)}}/>
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}> Save</Button>
        </Modal.Footer>
      </Modal>
      <Categorylist addStatus={addStatus}/>


      {/* <Card style={{ width: '20rem',backgroundColor:'pink' }} className='mb-3 ms-3'>
      <Card.Body className='d-flex flex-row justify-content-between'>
          <Card.Title>asdfgg</Card.Title>
          <i className='fa-solid fa-trash'style={{ color: "#ef0b0b" }}></i>
        </Card.Body>
        
        <Card.Img variant="top" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" className='img-fluid' />
        
      </Card> */}
      
    </>
  )
}

export default Categories