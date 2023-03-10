import React from "react";
import TinderCard from "react-tinder-card";

import { useRef, useMemo, useEffect } from "react";
import { useState } from "react";
import "./Dashboard.css";
import Matches from "../../components/Matches/Matches";

const db = [
  {
    name: "Ojasvi",
    age: 21,
    url: "https://www.scrolldroll.com/wp-content/uploads/2022/12/Hania-Amir-beautiful-pakistani-actresses.jpg",
  },
  {
    name: "Ira",
    age: 22,
    url: "https://imgeng.jagran.com/webstories/7791/pakistani-actress-hania-amir-is-breathtaking-in-these-western-looks-1671693359.jpeg",
  },
  {
    name: "Aanya",
    age: 23,
    url: "https://cdn.siasat.com/wp-content/uploads/2023/02/hania-amir.jpg",
  },
  {
    name: "Lasya",
    age: 24,
    url: "https://lollywoodcity.com/wp-content/uploads/2022/03/haniaheheofficial_272875010_971176673531365_4582770850327121465_n-819x1024.jpg",
  },
  {
    name: "Aakriti",
    age: 25,
    url: "https://imgeng.jagran.com/webstories/7791/pakistani-actress-hania-amir-is-breathtaking-in-these-western-looks-1671693359.jpeg",
  },
];

const Dashboard = () => {
  const characters = db;
  const [lastDirection, setLastDirection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  useEffect(() => {
    document.querySelector("html").classList.add("overflow-hidden");
  }, []);

  return (
    <div className="dashboard-container">
      <Matches />

      <div className="main-section">
        <div className="logo-filter">
          <img src="/assets/image 5.png" alt="" />
          <div className="filter">
            <img src="/assets/filter.png" alt="" />
            <p>Filters</p>
          </div>
        </div>

        <div className="swipecard-container">
          {characters.map((character, index) => {
            return (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div className="profile-container">
                  <div
                    className="img-container"
                    style={{ backgroundImage: "url(" + character.url + ")" }}
                  ></div>
                  <div className="name-container">
                    <div className="name-container">
                      <div className="name">
                        <h3>
                          {character.name}, {character.age}
                        </h3>

                        <div className="verify">
                          <img src="/assets/image 15.png" alt="" />
                          <p>Photo verified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TinderCard>
            );
          })}
        </div>

        <div className="report">
          <img src="/assets/report.png" alt="" />
          <p>Block and Report</p>
        </div>
        <div className="swipe-btns">
          <span className="left-swipe" onClick={() => swipe("left")}>
            <img src="/assets/cross.png" alt="" />
          </span>

          <span className="undo-btn" onClick={() => goBack()}>
            <img src="/assets/undo.png" alt="" />
          </span>

          <span className="right-swipe" onClick={() => swipe("right")}>
            <img src="/assets/right-heart.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
