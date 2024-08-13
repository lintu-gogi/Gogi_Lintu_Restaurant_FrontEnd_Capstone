import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function ImageAndDes() {
  return (
    <div className="container-fluid">           
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2" style={{ border: '1px solid black' }}>
          <img
            id="img_Id"
            src="https://cdn-icons-png.flaticon.com/512/4780/4780045.png"
            className="img-fluid"
            alt="Icon"
          />
        </div>
        <div id="headerId" className="col-sm-10 col-md-10 col-lg-10" style={{ border: '1px solid black' }}>
          <h1 id="heading1_Id">
            <br />
            Best Biriyani <br /> in Boston Area
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ImageAndDes