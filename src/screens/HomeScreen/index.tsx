import React, {memo, useCallback} from 'react';
import {Button} from '@components/Button';
import {Route} from '@types/routes';
import {ScreenContainer} from '@components/ScreenContainer';

export const HomeScreen = memo(({navigation}) => {
  const openGameModal = useCallback(() => navigation.navigate(Route.Game), []);

  return (
    <ScreenContainer>
      <Button onPress={openGameModal}>Start the game</Button>
    </ScreenContainer>
  );
});
