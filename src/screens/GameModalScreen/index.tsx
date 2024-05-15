import React, {memo, useCallback, useState} from 'react';
import {Timer} from './components/Timer';
import {GameBody} from './components/GameBody';
import {Button} from '@components/Button';
import {ScreenContainer} from '@components/ScreenContainer';

export enum GameState {
  Initial = 'Initial',
  Playing = 'Playing',
  Finished = 'Finished',
}

export const GameModalScreen = memo(() => {
  const [gameState, setGameState] = useState(GameState.Initial);

  const startGame = useCallback(() => setGameState(GameState.Playing), []);

  const endGame = useCallback(() => setGameState(GameState.Finished), []);

  const playAgain = useCallback(() => setGameState(GameState.Playing), []);

  return (
    <ScreenContainer>
      <Timer startTimer={gameState === GameState.Playing} onTimeEnd={endGame} />
      {gameState === GameState.Initial && (
        <Button onPress={startGame}>Play</Button>
      )}
      <GameBody gameState={gameState} />
      {gameState === GameState.Finished && (
        <Button onPress={playAgain}>Play again</Button>
      )}
    </ScreenContainer>
  );
});
