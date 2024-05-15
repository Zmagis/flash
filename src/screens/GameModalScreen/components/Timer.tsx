import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const TIME = 6;

type TimerProps = {
  startTimer: boolean;
  onTimeEnd: () => void;
};

export const Timer = ({startTimer, onTimeEnd}: TimerProps) => {
  const [countdown, setCountdown] = useState(TIME);
  const [littleTime, setLittleTime] = useState(false);
  const timerRef = useRef<string | number | NodeJS.Timeout | undefined>();

  const formatCountdown = useCallback(() => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    if (seconds <= 3 && !littleTime) {
      setLittleTime(true);
    }

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [countdown, littleTime]);

  const startGame = useCallback(() => {
    setCountdown(TIME);
    setLittleTime(false);
    timerRef.current = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(timerRef.current);
          timerRef.current = undefined;
          onTimeEnd();
        }

        return prevCountdown - 1;
      });
    }, 1000);
  }, [timerRef, onTimeEnd]);

  useEffect(() => {
    if (startTimer) {
      startGame();
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    };
  }, [startGame, startTimer]);

  return <Container littleTime={littleTime}>{formatCountdown()}</Container>;
};

const Container = styled.Text<{littleTime: boolean}>`
  text-align: center;
  font-size: 24px;
  color: ${({littleTime}) => (littleTime ? 'red' : 'black')};
`;
