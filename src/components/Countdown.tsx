import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, seconedRight] = String(seconds).padStart(2, '0').split('');

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

      {hasFinished ? (
        <button
          disabled
          className={`${style.countdownButton}`}
        >
          Ciclo encerrado
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${style.countdownButton} ${style.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar um ciclo
              </button>
            ) : (
                <button
                  type="button"
                  className={style.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}
    </div>
  );
}
