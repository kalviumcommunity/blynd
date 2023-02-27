import React from 'react'
import { useNavigate } from "react-router-dom";
import "./UploadPicture.css"


const UploadPicture = () => {
    const navigate = useNavigate();
  return (
    <>
    {/* <form onSubmit={handleSubmit}> */}
      <div className="container-namePage">
        <div className="row1" onClick={()=>{navigate('/interest')}}>
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2>Upload your photos</h2>
        {/* <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        /> */}
       


        <div className="next-btn">
          Next
        </div>
        <div className="progress-tracker">
          <p className="progress-number">
            <span className="process-number">4</span>
            <span className="total-number">/4</span>
          </p>
          <div className="progress-bar">
            <div className="progress-upload"></div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  )
}

export default UploadPicture