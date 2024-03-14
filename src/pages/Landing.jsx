import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center ' style={{ height: '80vh' }}>
        <div className="row p-5 shadow">
          <div className="col d-flex flex-column justify-content-center">
            <h1>Media Player</h1>
            <p>Explore media player for youtube video upload and managemeent. You can add and manage videos, categories and even chec</p>
            <div>
              <Link to="/dash" className="btn btn-success">Explore</Link>
            </div>
          </div>
          <div className="col">
            <img src="/img/i8.jpg" alt="img" className='img-fluid shadow' />
          </div>
        </div>
      </div>

      <div className="mt-3 p-5 ">
        <h1 className='text-center'>Features</h1>
        <div className="d-flex mt-2 flex-row justify-content-between">
          
          <div ClassName="card " style={{width: "18rem"}}>
            <img ClassName="card-img-top" style={{height:'300px', width:"300px"}} src="https://cdn.dribbble.com/users/3635718/screenshots/7163576/media/2a7c89c5fe7a8316fa0cbadb71719940.gif" alt="Card image cap"/>
              <div ClassName="card-body">
                <h5 ClassName="card-title">Upload videos</h5>
                <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div ClassName="card" style={{width: "18rem"}}>
            <img ClassName="card-img-top" style={{height:'300px', width:"300px"}}  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" alt="Card image cap"/>
              <div ClassName="card-body">
                <h5 ClassName="card-title">Watch videos</h5>
                <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div ClassName="card" style={{width: "18rem"}}>
            <img ClassName="card-img-top" style={{height:'300px', width:"300px"}}  src="https://i.gifer.com/origin/21/21c886db1d85b5b34390b7a3e27db485_w200.gif" alt="Card image cap"/>
              <div ClassName="card-body">
                <h5 ClassName="card-title">View history</h5>
                <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-between flex-row align-items-center p-5">
        <div className="col">
          <h2>Simple fast & Secure</h2>
          <p style={{textAlign:'justify'}}>Media Player 2024 is a platform for simple and faster youtube video uploading and management. You  video watch history too where you get 
            a simple video player interface with the app itself...
          </p>
        </div>
        <div className="col">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5X0g9AtOW70" title="Thooriga | HDR | Guitar Kambi Mele Nindru | Suriya, Prayaga Martin |Gautham Menon |Karthik |Navarasa" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </>
  )
}

export default Landing