import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import SettingsSideSection from "../../components/SettingsSideSection/SettingsSideSection";
import "./DateProfile.css";

const DateProfile = () => {
  return (
    <div className="dashboard-container">
      <SettingsSideSection />

      <div className="main-section-dateprofile">
        <div className="mainrow1">
          <h1>Date Profile</h1>
        </div>

        <div className="image-container">
          <div className="col1">
            <div className="big-box">
              <div className="inner-img-box"></div>
            </div>
            <div className="small-box-cont">
              <div className="small-box">
                <div className="inner-img-box"></div>
              </div>
              <div className="small-box">
                <div className="inner-img-box"></div>
              </div>
            </div>
          </div>

          <div className="col2">
            <div className="small-box">
              <div className="inner-img-box"></div>
            </div>
            <div className="small-box">
              <div className="inner-img-box"></div>
            </div>
            <div className="small-box">
              <div className="inner-img-box"></div>
            </div>
          </div>
        </div>

        <div className="verification">
          <p>Verification</p>
          <button className="verify-btn">
            Verify your account
            <BsArrowRightShort size="1.6rem" fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateProfile;
