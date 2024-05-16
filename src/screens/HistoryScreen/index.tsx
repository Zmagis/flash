import {ScreenContainer} from '@components/ScreenContainer';
import React, {memo} from 'react';
import styled from 'styled-components/native';

export const HistoryScreen = memo(() => {
  return (
    <ScreenContainer>
      <Text>
        We're working on History Screen. Can't wait to share when it's ready.
      </Text>
    </ScreenContainer>
  );
});

const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;
