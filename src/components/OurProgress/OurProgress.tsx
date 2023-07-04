import React from "react";
import "../OurProgress/styles.css";
import FourDots from "../../assets/icons/fourDots";

const OurProgress = () => {
  return (
    <div className="mainContainer">
      <div className="container1">
        <div className="ourProgress">
          <p className="ourProgressTextTitle">
            НАШИ ДОСТИЖЕНИЯ ОТ КУБКА РОССИИ ДО ЧЕМПИОНАТОВ МИРА
          </p>
          <FourDots />
          <p className="ourProgressText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            tincidunt aliquam tincidunt pretium sodales. Tristique odio
            pellentesque et tincidunt posuere arcu purus lobortis risus. Urna,
            ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus
            tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis
            pretium, volutpat.{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <div className="box">
              <p className="prizeNumber">#1</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="box">
              <p className="prizeNumber">#6</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="box">
              <p className="prizeNumber">#2</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="box">
              <p className="prizeNumber">#1</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <div className="boxcolumn2">
              <p className="prizeNumber">#4</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="boxcolumn2">
              <p className="prizeNumber">#3</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="boxcolumn2">
              <p className="prizeNumber">#1</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="boxcolumn2">
              <p className="prizeNumber">#1</p>
              <p className="boxtText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurProgress;
