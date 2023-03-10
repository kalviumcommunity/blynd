import React from 'react';
import './MatchesStyle.css';

const Matches = () => {
  return (
    <div className="dashboard-side-section">
        <div className="info-row">
            <span>
                <img src="/assets/tanishq pic.jpg" alt="" />
            </span>
            <h2>Tanishq</h2>
        </div>
        <div className="date-match-switch">
            <div className="dates">
            Dates
            </div>
            <div className="matches">
          Matches
            </div>
        </div>
        <div className="date-match-fixing">
            <img src="/assets/nomatch-illus.svg" alt="" />
            <h3>Find your matches here</h3>
            <p>Start discovering people to get matches</p>
        </div>
    </div>
  )
}

export default Matches