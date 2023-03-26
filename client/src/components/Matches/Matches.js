import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Dates from '../Dates/Dates';
import SwipeMatches from '../SwipeMatches/SwipeMatches';
import './MatchesStyle.css';

const Matches = () => {
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState("matches");
  const name = localStorage.getItem('name');


  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div className="dashboard-side-section">
        <div className="info-row">
            <span onClick={() => {
          navigate("/profile/editprofile");
        }}>
                <img src="/assets/tanishqpic.jpg" alt="" />
            </span>
            <h2>{name}</h2>
        </div>
        <div className="date-match-switch">
            <div onClick={() => handleClick("dates")} disabled={activeButton === "dates"} className={ `${activeButton === "dates" ? "matches" : "dates"}`}>
            Dates
            </div>
            <div onClick={() => handleClick("matches")} disabled={activeButton === "matches"} className={ `${activeButton === "matches" ? "matches" : "dates"}`}>
          Matches
            </div>
        </div>
        
        {activeButton === "dates" && <Dates/>}
        {activeButton === "matches" && <SwipeMatches/>}
    </div>
  )
}

export default Matches