import { useState, useEffect } from 'react';
import style from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, settime] = useState(1 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, seconedRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(!active);
  }


  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        settime(time - 1);
      }, 1000)
    }
  }, [active, time])

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{seconedRight}</span>
        </div>
      </div>
      <button
        type="button"
        className={style.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
          </button>
    </div>
  );
}
