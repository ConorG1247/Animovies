import React from "react";

function AnimeMain() {
  return (
    <div>
      <div className="background-container">
        <img
          src={require("../../../../images/MobPsycho.png")}
          alt=""
          className="anime-background-image"
        />
        <div className="background-container-center">
          <div className="background-colour">
            <div className="background-description-container">
              <div className="background-title">Mob Psycho 100 (Season 3)</div>
              <div>
                Mob Psycho 100 returns for Season 3 and will include three arcs
                including the Divine Tree Arc which we'll see Mob battle the
                Divine Tree.
              </div>
              <div>October 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeMain;
