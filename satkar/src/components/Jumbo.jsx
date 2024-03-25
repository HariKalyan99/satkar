import React from "react";
import Swipers from "./Swipers";

const Jumbo = () => {
  return (
    <main>
      <div class="container py-4">
        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 ">
              <div
                className="container-fluid py-5"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/58/7f/db/587fdb35c36585af5c4757bf9d3b80da.gif')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "white",
                  height: "800px",
                }}
              ></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-1  d-flex flex-row align-items-center">
              <Swipers />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jumbo;
