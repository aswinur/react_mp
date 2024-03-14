import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'


function Dashboard() {
  const[addStatus,setAddStatus]=useState({})
  return (
    <>
      <div>
        <h3>Dashboard</h3>
        <Link to={'/his'}>Watch History</Link>
        <Row className='p-5'>
          <Col sm='1' md='2'>
            <Addvideos setAddStatus={setAddStatus}/>
          </Col>
          <Col sm='4' md='7'>
            <Videos addStatus={addStatus}/>
          </Col>
          <Col sm='2' md='3'>
            <Categories />
          </Col>
        </Row>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Dashboard