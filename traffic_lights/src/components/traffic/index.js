import './styles.css';
import React, { useState, useEffect, useCallback } from 'react';

const Traffic = () => {
  let getUpcoming = (light) => {
    switch (light) {
      case 'green':
        return {
          color: 'yellow',
          text: 'The light is yellow.',
          background: '#FFF2C5',
          border: '#FFCD1B',
          fontColor: '#8E7004',
          timeout: 8000,
        };
      case 'yellow':
        return {
          color: 'red',
          text: 'The light is red.',
          background: '#FFD3D3',
          border: '#FF1B1B',
          fontColor: '#930101',
          timeout: 4000,
        };
      case 'red':
        return {
          color: 'green',
          text: 'The light is green.',
          background: '#DDFFE4',
          border: '#00D12E',
          fontColor: '#005012',
          timeout: 8000,
        };

      default:
        return {
          color: 'black',
          text: 'No light match',
          background: 'whitesmoke',
          border: 'black',
          fontColor: 'black',
          timeout: 0,
        };
    }
  };

  const [light, setLight] = useState(getUpcoming('red'));
  const [time, setTime] = useState(getUpcoming('green').timeout / 1000);

  const lightsManager = useCallback(() => {
    // decrease timer
    setTimeout(() => {
      let remaningTime = time;
      if (remaningTime > 0) {
        --remaningTime;
      }
      setTime(remaningTime);

      // Action when timer is 0
      if (remaningTime === 0) {
        let nextLight = getUpcoming(light.color);
        remaningTime = getUpcoming(nextLight.color).timeout / 1000;
        setLight(nextLight);
      }

      // Set new time from next color
      setTime(remaningTime);
    }, 1000);
  }, [time, light.color]);

  useEffect(() => {
    lightsManager();
  }, [lightsManager]);

  return (
    <div
      style={{
        display: 'flex',
        border: `1px solid ${light.color}`,
        margin: '50px auto',
        width: '900px',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'background-color': light.background,
        'border-radius': '6px',
      }}
    >
      <div
        id='traffic-light'
        style={{
          margin: '50px',
          padding: '10px 100px',
          height: '100%',
          border: `1px solid ${light.fontColor}`,
        }}
      >
        <div
          className={`bulb ${light?.color === 'red' ? 'red' : '#111'}`}
        ></div>
        <div
          className={`bulb ${light?.color === 'yellow' ? 'yellow' : '#111'}`}
        ></div>
        <div
          className={`bulb ${light?.color === 'green' ? 'green' : '#111'}`}
        ></div>
        <div
          style={{
            display: 'flex',
            width: '300px',
            'justify-text': 'center',
            'font-size': '30px',
            'line-height': '35px',
            'font-weight': 300,
            color: light.fontColor,
          }}
        >
          {light.text}
        </div>
      </div>
    </div>
  );
};

export default Traffic;
