import React, { useEffect, useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 70,
  strokeWidth: 4
};

const renderTime = (/** @type {{}} */ dimension, /** @type {{}} */ time) => {
  return (
    <div className="time-wrapper">
      <div className="text-md">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};


export default function Timmer() {
  const stratTime = 1628533372264 / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 2432480; // use UNIX timestamp in seconds

  // @ts-ignore
  const [timmerDays, setTimerDays] = useState("00");
  // @ts-ignore
  const [timmerHours, setTimerHours] = useState("00");
  // @ts-ignore
  const [timmerMinutes, setTimerMinutes] = useState("00");
  // @ts-ignore
  const [timmerSeconds, setTimerSecond] = useState("00");

  let interval = useRef();
  // @ts-ignore
  const startTimmer = () => {
    const countdownDate = new Date('September 24, 2021 00:00:00').getTime();
    // @ts-ignore
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));

      if (distance < 0) {
        //stop timmer
        clearInterval(interval.current);
      } else {
        // Update timmer
        // @ts-ignore
        setTimerDays(days);
        // @ts-ignore
        setTimerHours(hours);
        // @ts-ignore
        setTimerMinutes(minutes);
        // @ts-ignore
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  // component did mount life cycle method
  useEffect(() => {
    startTimmer();
    return () => {
      // eslint-disable-next-line
      clearInterval(interval.current);
    };
  });

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="timmer-container">
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {() =>
          renderTime("days", timmerDays)
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        // @ts-ignore
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {() =>
          renderTime("hrs", timmerHours)
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        // @ts-ignore
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {() =>
          renderTime("mins", timmerMinutes)
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        // @ts-ignore
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {() =>
          renderTime("secs", timmerSeconds)
        }
      </CountdownCircleTimer>
    </div>
  );
}
