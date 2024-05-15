import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {Item} from './Item';
import {Text, View} from 'react-native';
import {GameState} from '../..';
import Sound from 'react-native-sound';

const ITEMS_COUNT = 16;
const ITEMS = Array.from({length: ITEMS_COUNT}, (_, index) => index + 1);

const getActiveItemNumber = () => Math.floor(Math.random() * ITEMS_COUNT) + 1;

type GameBodyProps = {gameState: GameState};

export const GameBody = memo<GameBodyProps>(({gameState}) => {
  const accuarateSound = useRef<Sound | null>();
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
        accuarateSound.current?.setCurrentTime(0).play();
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
    [number, strike, score, accuarateSound, missedSound],
  );

  useEffect(() => {
    accuarateSound.current = new Sound(
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
      // TODO set score to async storage
    }
  }, [gameState]);

  return (
    <View>
      <Text>Strike - {strike}</Text>
      <Text>Score - {score}</Text>
      {(loadingAccurateAudio || loadingMissedAudio) && <Text>Loading...</Text>}
      {gameState === GameState.Playing && (
        <Container>
          {ITEMS.map((id, index) => (
            <Item key={index} id={id} active={id === number} onPress={press} />
          ))}
        </Container>
      )}
    </View>
  );
});

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  flex: 1;
`;
