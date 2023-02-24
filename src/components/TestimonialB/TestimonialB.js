import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './TestimonialB.css'

export default class TestimonialB extends Component {
  render() {
    return (<>
        
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/assets/man.png" alt="" />
          <div className="myCarousel">
            <h3>Hannah Schmitt</h3>
            <h4>User</h4>
            <p className="testi-p">
            I was skeptical about blind dating at first, but Connect in Real Life made it so easy and fun. I've met some amazing people and even found a romantic connection.</p>
          </div>
        </div>

        <div>
          <img src="/assets/woman.png" alt="" />
          <div className="myCarousel">
            <h3>Bhumika</h3>
            <h4>Client</h4>
            <p className="testi-p">
            I was skeptical about blind dating at first, but Connect in Real Life made it so easy and fun. I've met some amazing people and even found a romantic connection.</p>
          </div>
        </div>

        <div>
          <img src="/assets/man.png" alt="" />
          <div className="myCarousel">
            <h3>Syeda</h3>
            <h4>Client</h4>
            <p className="testi-p">
            I was skeptical about blind dating at first, but Connect in Real Life made it so easy and fun. I've met some amazing people and even found a romantic connection.</p>
          </div>
        </div>

        {/* <div>
          <img src={woman3} alt="" />
          <div className="myCarousel">
            <h3>Shreya</h3>
            <h4>Client</h4>
            <p>
            Heyyy, I just wanted to thank you for helping me get better...I feel soo much better now..my marks have also improved but not how much I expected but better than last time.. I started working out also...I feel good about myself...me and Manoj communicate well now so we don't misunderstand things...so everything is got better and I'm really happy about it...all thanks to you..you seriously helped alottt..thank you so much..you are the best!!
            </p>
          </div>
        </div> */}

        {/* <div>
          <img src={man3} alt="" />
          <div className="myCarousel">
            <h3>Shubham</h3>
            <h4>Owner</h4>
            <p>
              this website is mine, and it awesome. promote storygiri, thank you.
            </p>
          </div>
        </div> */}
      </Carousel>
      </>
    );
  }
}