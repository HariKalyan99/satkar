import React from "react";
import Juicedrawer from "./Juicedrawer";
const Cards = ({ juice, image, description }) => {
  return (

     
         <div class="col">
          <div class="card shadow-sm" style={{
                border: "none",
                overflow: "hidden",
                opacity: "0.9",
                borderBottomRightRadius: "20%",
                borderBottomLeftRadius: "20%",
                height: "250px",
                width: "250px"
              }}>
                <p className="fw-bold" style={{textAlign: "center"}}>{juice}</p>
                <Juicedrawer content={description} juice={juice}/>
              <img
                src={image}
                alt="content writing image"
                style={{ objectFit: "cover", height: "250px" }}
              />
          </div>
        </div>


  );
};
export default Cards;
