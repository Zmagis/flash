import React, {memo, useCallback, useEffect} from 'react';
import {Button} from '@components/Button';
import {Route} from '@types/routes';
import {ScreenContainer} from '@components/ScreenContainer';
import styled from 'styled-components/native';
import {useAppSelector} from '@state/hooks';

export const HomeScreen = memo(({navigation}) => {
  const userName = useAppSelector(state => state.user.userName);

  const openGameModal = useCallback(() => navigation.navigate(Route.Game), []);

  useEffect(() => {
    navigation.getParent().setOptions({
      headerLeft: () => <></>,
    });
  }, []);

  return (
    <ScreenContainer>
      <Text>{userName}, let's see what you've got!</Text>
      <Button onPress={openGameModal}>Flash game</Button>
    </ScreenContainer>
  );
});

const Text = styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text};
`;
