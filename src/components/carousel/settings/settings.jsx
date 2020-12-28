import React from 'react';
import './settings.css';

const Settings = (props) => (
  <div className="settings">
    <div className="changeAmountElements">
      <label htmlFor="oneElement">
        <input type="radio" id="oneElement" name="multiMode" onChange={() => props.changeMultiMode(false)} defaultChecked />
        One slide
      </label>
      <label htmlFor="multiMode">
        <input type="radio" id="multiMode" name="multiMode" onChange={() => props.changeMultiMode(true)} />
        Multiple slide
      </label>
    </div>
    <div className="changeTypeElements">
      <label htmlFor="onlyPictures">
        <input type="radio" id="onlyPictures" name="differentElements" onChange={() => props.choosePictureElements()} defaultChecked />
        Only images
      </label>
      <label htmlFor="differentElements">
        <input type="radio" id="differentElements" name="differentElements" onChange={() => props.chooseDifferentElements()} />
        Any content
      </label>
    </div>
  </div>
);

export default Settings;
