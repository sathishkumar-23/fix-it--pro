import React from 'react';
import './PreLoading.css'; // Ensure this CSS file is updated accordingly

const PreLoading = () => {
  return (
    <>
      <div className="cssload-dots">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className={`cssload-dot dot-${index + 1}`} key={index}></div>
        ))}
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default PreLoading;
