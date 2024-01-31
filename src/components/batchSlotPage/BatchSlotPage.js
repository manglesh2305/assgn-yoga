// components/BatchSlotPage.js
import { useState } from "react";
import React from "react";
import "./BatchSlotPage.css";
import image from "../../assets/Screenshot 2024-01-29 215052.png";
import Slot from "../slot/Slot";

const BatchSlotPage = () => {
 const [selected,setSelected] = useState();
 const data = [{"date":'29th Jan','day':"Monday"},{"date":'30th Jan','day':"Tuesday"},{"date":'31th JAn','day':"Wednesday"},{"date":'1st Feb','day':"Thursday"},{"date":'2nd Feb','day':"Friday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"},{"date":'29th JAn','day':"Monday"}]
  return (
    <div>
    <div className="header">
      <h2>Yoga for Mind</h2>
      <img src={image} alt="frontImage" />
      <h3>What is Yoga for Mind?</h3>
      <p> The Yoga for Mind involves physical movement and relies on
        technique such as pranayama and meditation, Suited for women who
        cannot perfrom more physical forms of yoga and are looking for
        relief from concerns such as stress, anxiety, low mood etc</p> 
    </div>
    <div className="package">
      <h3>1 Month Yoga for Mind</h3>
      <p>5 days a week <b>Change Plan</b></p>
      <h4>Pick a start date</h4>
      <p>Dates are available only for next two weeks</p>
      {data.map((date,index) => (
        <Slot date={date.date} day={date.day} onClick={()=>setSelected(index)} isActive={index === selected}/>
      ))}
    </div>
    </div>
  );
};

export default BatchSlotPage;
