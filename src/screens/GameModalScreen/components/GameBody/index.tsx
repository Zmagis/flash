import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {Item} from './Item';
import {GameState} from '../..';
import Sound from 'react-native-sound';
import {Loader} from '@components/Loader';
import Orientation from 'react-native-orientation-locker';
import {storage} from '@utils/storage';
import {storageKeys} from '@constants/storageKeys';
import {useAppDispatch, useAppSelector} from '@state/hooks';
import {setResults} from '@state/results/ResultsSlice';

const ITEMS_COUNT = 16;
const ITEMS = Array.from({length: ITEMS_COUNT}, (_, index) => index + 1);

const getActiveItemNumber = () => Math.floor(Math.random() * ITEMS_COUNT) + 1;

type GameBodyProps = {gameState: GameState};

export const GameBody = memo<GameBodyProps>(({gameState}) => {
  const userName = useAppSelector(state => state.user.userName);
  const results = useAppSelector(state => state.results.results);
  const dispatch = useAppDispatch();
  const accurateSound = useRef<Sound | null>();
  const missedSound = useRef<Sound | null>();
  const [loadingAccurateAudio, setLoadingAccurateAudio] = useState(true);
  const [loadingMissedAudio, setLoadingMissedAudio] = useState(true);
  const [number, setNumber] = useState(getActiveItemNumber());
  const [strike, setStrike] = useState(0);
  const [score, setScore] = useState(0);

  const press = useCallback(
    id => {
      if (id === number) {
        setNumber(getActiveItemNumber());
        setStrike(prevStrike => prevStrike + 1);
        accurateSound.current?.setCurrentTime(0).play();
        if (strike >= 5) {
          setScore(score + 5);
        } else {
          setScore(score + 1);
        }
      } else {
        missedSound.current?.setCurrentTime(0).play();
        setStrike(0);
      }
    },
    [number, strike, score, accurateSound, missedSound],
  );

  const saveScore = useCallback(async () => {
    let updatedResults = JSON.parse(JSON.stringify(results));

    if (!results) {
      const rawResults = await storage.getItem(storageKeys.RESULTS);
      updatedResults = JSON.parse(rawResults) || {};
    }

    const newScore = {score, date: new Date().toDateString()};

    if (!updatedResults[userName]) {
      updatedResults[userName] = [newScore];
    } else {
      updatedResults[userName] = [...updatedResults[userName], newScore];
    }

    dispatch(setResults(updatedResults));
    await storage.setItem(storageKeys.RESULTS, JSON.stringify(updatedResults));
  }, [userName, score, results]);

  useEffect(() => {
    Orientation.lockToPortrait();

    accurateSound.current = new Sound(
      'accurateclick.mp3',
      Sound.MAIN_BUNDLE,
      () => {
        setLoadingAccurateAudio(false);
      },
    );
    missedSound.current = new Sound(
      'missedclick.mp3',
      Sound.MAIN_BUNDLE,
      () => {
        setLoadingMissedAudio(false);
      },
    );
  }, []);

  useEffect(() => {
    if (gameState === GameState.Playing) {
      setStrike(0);
      setScore(0);
    } else if (gameState === GameState.Finished) {
      saveScore();
    }
  }, [gameState]);

  return (
    <Container>
      <Results>
        <Text>Strike: {strike}</Text>
        <Text>Score: {score}</Text>
      </Results>
      {(loadingAccurateAudio || loadingMissedAudio) && <Loader />}
      {gameState === GameState.Playing && (
        <Items>
          {ITEMS.map((id, index) => (
            <Item key={index} id={id} active={id === number} onPress={press} />
          ))}
        </Items>
      )}
    </Container>
  );
});

const Container = styled.View`
  flex-wrap: wrap;
  height: 100%;
  flex: 1;
  gap: 16px;
`;

const Results = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const Text = styled.Text`
  width: 50%;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
`;

const Items = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  flex: 1;
`;
