/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { FaHeartPulse } from "react-icons/fa6";
import { BiRun } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaPersonFalling } from "react-icons/fa6";
import rightCornerImage from "../assets/Screenshot 2024-01-29 195159.png";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <div className="container">
        <div className="section-1">
          <div className="left">
            <h2>Yoga for Mind</h2>
            <p>
              Watch Our Lead Yoga Thrapist. <u>Ms Uma Subramaniam </u>explain
              Yoga for Mind
            </p>
          </div>
          <div className="right">
            <img
              src={rightCornerImage}
              alt="Right Corner Image"
              className="right-corner-image"
            />
          </div>
        </div>
        <div class="section-2">
          <h3>is this for you?</h3>
          <div className="cards">
            <div>
              <div id='icon'><FaPersonFalling className="icon" /></div>
              <span>Hard to feel calm or sleep because of stress</span>
              <button>Book trial @99</button>
            </div>
            <div>
              <div id='icon'><FaHeartPulse className="icon" /></div>
              <span>Hard to feel calm or sleep because of stress</span>
              <button>Book trial @99</button>
            </div>
            <div>
              <div id='icon'><BiRun className="icon" /><RxCross2 className="icon" /></div>
              <span>You have been advised by doctors to avoid physical activity</span>
              <Link
                id='link'
                to="/"

              >
                i have a question
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
}

.section-1{
  height: 60%;
  width: 100vw;
  display: flex;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 8px;
  background-color: whitesmoke;
}

.left{
  width: 50%;
  padding: 1rem;
}
.left >h2{
  font-family: cursive;
  margin: 1rem;
  color: rgb(215, 86, 108);
}
.left > p{
  margin: 2px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
u{
  color: rgb(215, 86, 108);
}
.right{
  width: 50%;
  height: 100%;
  object-fit: cover;
}
.right > img{
  width: 85%;
  height: auto;
  border: 1px solid none;
}
.section-2{
  height: 40%;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 8px;
  background-color: whitesmoke;
  margin: 1rem;
  margin-top: 0rem;
}
.section-2 > h3{
  margin: 5px;
  color: green;
  
}
.cards{
  display: flex;
}
.cards > *{
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#icon{
  background-color: gray;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon{
  height: 2.5rem;
  width: 2.5rem;
}
#link{
  text-decoration: none;
  color: green;
}
button{
  height: 2rem;
  width: 10rem;
  color: rgb(215, 86, 108);
  border: 1px solid rgb(215, 86, 108);
  
}
`
export default HomePage;
