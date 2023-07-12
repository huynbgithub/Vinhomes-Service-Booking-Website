import React, { useEffect, useState, useRef } from 'react';
import "./style.css"

const ProgressBar = ({ duration, secondPassedBy, timeout, proServiceID, bookingID, customerName, serviceName, providerName }) => {
  const [progress, setProgress] = useState(100);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  const animateProgress = (timestamp) => {
    
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      const elapsedTime = timestamp - startTimeRef.current;
      const progress = Math.max(100 - (elapsedTime / (duration * 1000)) * 100, 0);
      setProgress(progress);

      if (progress > 0) {
        animationRef.current = requestAnimationFrame(animateProgress);
      }else timeout(proServiceID,bookingID,serviceName,customerName, providerName);
    
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [duration]);

  useEffect(() => {
    if (secondPassedBy >= 0 && secondPassedBy <= duration) {
      const startProgress = ((duration - secondPassedBy) / duration) * 100;
      setProgress(startProgress);

      const remainingTime = secondPassedBy * 1000;
      const startTime = performance.now() - (remainingTime * progress) / 100;
      startTimeRef.current = startTime;

      animationRef.current = requestAnimationFrame(animateProgress);
    }
  }, [duration, secondPassedBy]);

  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
