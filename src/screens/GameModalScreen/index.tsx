import React, {memo, useCallback, useEffect, useState} from 'react';
import {Timer} from './components/Timer';
import {GameBody} from './components/GameBody';
import {Button} from '@components/Button';
import {ScreenContainer} from '@components/ScreenContainer';
import {useNavigation} from '@hooks/useNavigate';
import {useAppSelector} from '@state/hooks';

export enum GameState {
  Initial = 'Initial',
  Playing = 'Playing',
  Finished = 'Finished',
}

export const GameModalScreen = memo(() => {
  const userName = useAppSelector(state => state.user.userName);
  const navigation = useNavigation();
  const [gameState, setGameState] = useState(GameState.Initial);

  const startGame = useCallback(() => setGameState(GameState.Playing), []);

  const endGame = useCallback(() => setGameState(GameState.Finished), []);

  const playAgain = useCallback(() => setGameState(GameState.Playing), []);

  useEffect(() => {
    navigation.setOptions({
      title: `${userName}, let's go!`,
    });
  }, []);

  return (
    <ScreenContainer scrollEnabled={false}>
      <Timer startTimer={gameState === GameState.Playing} onTimeEnd={endGame} />
      <GameBody gameState={gameState} />
      {gameState === GameState.Initial && (
        <Button onPress={startGame}>Play</Button>
      )}
      {gameState === GameState.Finished && (
        <Button onPress={playAgain}>Play again</Button>
      )}
    </ScreenContainer>
  );
});
