import React, { useState, useEffect } from "react";

const Toggles = ({
  backOption,
  setBackOption,
  eyeOption,
  setEyeOption,
  soundOption,
  setSoundOption,
  stressOption,
  setStressOption,
  waterOption,
  setWaterOption,
}) => {
  return (
    <div className="options">
      <div className="option">
        <img
          src="./assets/back.svg"
          alt="Posture icon"
          className="preference-icon"
        />
        <div>Back Care:</div>
        <div className="option-text">
          <label className="switch">
            <input
              type="checkbox"
              checked={backOption}
              onChange={(e) => {
                setBackOption(!backOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="option">
        <img src="./assets/eye.svg" alt="Eye icon" className="preference-icon" />
        <div className="option-text">Eye Care:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={eyeOption}
              onChange={(e) => {
                setEyeOption(!eyeOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="option">
        <img src="./assets/ear.svg" alt="Ear icon" className="preference-icon" />
        <div className="option-text">Ear Care:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={soundOption}
              onChange={(e) => {
                setSoundOption(!soundOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="option">
        <img src="./assets/stress.svg" alt="stress icon" className="preference-icon" />
        <div className="option-text">Stress Care:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={stressOption}
              onChange={(e) => {
                setStressOption(!stressOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="option">
        <img src="./assets/water.svg" alt="glass icon" className="preference-icon" />
        <div className="option-text">Water Reminders:</div>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={waterOption}
              onChange={(e) => {
                setWaterOption(!waterOption);
              }}
            ></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toggles;
