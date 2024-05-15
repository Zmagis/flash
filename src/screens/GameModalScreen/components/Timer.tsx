import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const TIME = 6;

type TimerProps = {
  startTimer: boolean;
  onTimeEnd: () => void;
};

export const Timer = ({startTimer, onTimeEnd}: TimerProps) => {
  const [countdown, setCountdown] = useState(TIME);
  const [isEnding, setIsEnding] = useState(false);
  const timerRef = useRef<string | number | NodeJS.Timeout | undefined>();

  const formatCountdown = useCallback(() => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    if (seconds <= 3 && !isEnding) {
      setIsEnding(true);
    }

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [countdown, isEnding]);

  const startGame = useCallback(() => {
    setCountdown(TIME);
    setIsEnding(false);
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

  return <Container isEnding={isEnding}>{formatCountdown()}</Container>;
};

const Container = styled.Text<{isEnding: boolean}>`
  text-align: center;
  font-size: 24px;
  color: ${({isEnding, theme}) =>
    isEnding ? theme.colors.error : theme.colors.text};
`;
