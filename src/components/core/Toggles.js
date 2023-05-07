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
          src=""
          alt="Posture icon"
          class="preference-icon"
        />
        <div>Back Care:</div>
        <div>
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
        <img src="/images/eye.svg" alt="Eye icon" class="preference-icon" />
        <div>Eye Care:</div>
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
        <img src="/images/ear.svg" alt="Ear icon" class="preference-icon" />
        <div>Ear Care:</div>
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
        <img src="" alt="Video icon" class="preference-icon" />
        <div>Stress Care:</div>
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
        <img src="/images/water.svg" alt="glass icon" class="preference-icon" />
        <div>Water Reminders:</div>
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
