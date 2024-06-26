import React from "react";
import Juicedrawer from "./Juicedrawer";
const Cards = ({ juice, image, description }) => {
  return (

     
         <div class="col">
          <div class="card shadow-sm" style={{
                border: "none",
                overflow: "hidden",
                opacity: "0.9",
                height: "550px",
                padding: "10px",
                width: "auto",
                backgroundColor: "#fff"
              }}>
                <p className="fw-bold" style={{textAlign: "center"}}>{juice}</p>
              <img
                src={image}
                alt="content writing image"
                style={{ objectFit: "cover", height: "400px"}}
              />
                <Juicedrawer content={description} juice={juice}/>
                <span className="fw-light text-center text-black">drag <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
</svg></span>
              
          </div>
        </div>


  );
};
export default Cards;
