import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./NamePage.css";
import { useNavigate } from "react-router-dom";

const NamePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const isFormValid = name;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form:", { name});
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="container-namePage">
        <div className="row1" onClick={()=>{navigate('/signup')}}>
          <img src="/assets/Back.png" alt="" />
        </div>

        <h2>What's your name?</h2>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {/* <img id='name-illus' src="/assets/name-illus.svg" alt="" /> */}

        {/* <TextField id="outlined-basic" label="Name" variant="outlined" /> */}
        <div className={`forward-btn ${isFormValid? 'enabled' : 'disabled'}`}>
          <button type="submit" disabled={!isFormValid} onClick={()=>{navigate('/gender')}}>
            <div>
              <img src="/assets/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
        <div className="progress-tracker">
          <p className="progress-number">
            <span className="process-number">1</span>
            <span className="total-number">/4</span>
          </p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default NamePage;
