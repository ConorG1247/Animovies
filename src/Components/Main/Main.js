import React from "react";

function Main({ offsetY }) {
  return (
    <div>
      <div className="background-container">
        <img
          src={require("../../images/EverythingEverywhere.jpg")}
          alt=""
          className="background-image"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        />
        <div className="background-container-center">
          <div className="background-colour">
            <div className="background-description-container">
            <div className="background-title">
              Everything Everywhere All at Once
            </div>
            <div>
              An aging Chinese immigrant is swept up in an insane adventure,
              where she alone can save the world by exploring other universes
              connecting with the lives she could have led.
            </div>
            <div>⭐8.2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
