import React, {PropsWithChildren, memo} from 'react';
import {ScrollView} from 'react-native';
import {SCREEN_PADDING} from '@constants/ui';
import styled from 'styled-components/native';

type ScreenContainerProps = PropsWithChildren<{}>;

export const ScreenContainer = memo<ScreenContainerProps>(({children}) => (
  <Container>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {children}
    </ScrollView>
  </Container>
));

const Container = styled.View`
  height: 100%;
  padding-horizontal: ${SCREEN_PADDING.horizontal}px;
  padding-vertical: ${SCREEN_PADDING.vertical}px;
`;
