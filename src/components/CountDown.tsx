import { useEffect, useRef, useState } from "react";

import "../styles/button.css";
import { IQuestion } from "../Questiongenerator";
import { useAppContext } from "../state management/StateContext";
import { useNavigate } from "react-router-dom";

interface CountDownProps {
  seconds: number;
  questions: IQuestion[];
}

/* interface Timer{
  getObject(): IQuestion[]
} */
const formatTime = (time: number) => {
  let minutes: number = Math.floor(time / 60);
  let seconds: number = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = parseInt(minutes.toString().padStart(2, "0"));
  if (seconds <= 10) seconds = parseInt(seconds.toString().padStart(2, "0"));

  return `${minutes}:${seconds}`;
};

const CountDown: React.FC<CountDownProps> = ({ seconds, questions }) => {
  const [countDown, setCountDown] = useState<number>(seconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  const { updateObject } = useAppContext();
  const timerId: React.MutableRefObject<number | undefined> = useRef();

  const startHandler = () => {
    setIsRunning(true);

    timerId.current = setInterval((): void => {
      setCountDown((prev: number) => prev - 1);
    }, 1000);
    updateObject(questions);

    console.log(timerId.current);

    console.log(isRunning);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (countDown === 0) {
      clearInterval(timerId.current);
      setCountDown(seconds);
      // alert("END");
      // setIsRunning(false);
      navigate("/submit");
    }
  }, [countDown, navigate, seconds]);

  // pause button handler
  const pauseHandler = () => {
    setCheck(!check);
    clearInterval(timerId.current);
  };

  // play button handler
  const playHandler = () => {
    setCheck(!check);

    timerId.current = setInterval((): void => {
      setCountDown((prev: number) => prev - 1);
    }, 1000);
  };

  // reset button handler
  const resetHandler = () => {
    setIsRunning(false);
    setCheck(false);

    clearInterval(timerId.current);
    setCountDown(seconds);
  };

  const countDownDefault = "00:00";

  return (
    <div>
      Timer:
      {isRunning ? (
        <h3>{formatTime(countDown)}</h3>
      ) : (
        <h3>{countDownDefault}</h3>
      )}
      <div>
        {!isRunning ? (
          <button onClick={startHandler} type="button">
            Start
          </button>
        ) : (
          <button onClick={resetHandler} type="button">
            restart
          </button>
        )}

        {!check ? (
          <button onClick={pauseHandler} disabled={!isRunning} type="button">
            pause
          </button>
        ) : (
          <button onClick={playHandler} type="button">
            play
          </button>
        )}
      </div>
    </div>
  );
};

export default CountDown;
