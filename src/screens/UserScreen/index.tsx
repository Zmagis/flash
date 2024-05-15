import React, {memo} from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '@components/ScreenContainer';

export const UserScreen = memo(() => {
  return (
    <ScreenContainer>
      <Text>User; change user</Text>
    </ScreenContainer>
  );
});
