import React, {memo} from 'react';
import {SCREEN_PADDING} from '@constants/ui';
import styled from 'styled-components/native';
import {ScrollView, ScrollViewProps} from 'react-native';

type ScreenContainerProps = ScrollViewProps;

export const ScreenContainer = memo<ScreenContainerProps>(
  ({scrollEnabled, children}) => (
    <ScrollView
      scrollEnabled={scrollEnabled}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{flexGrow: 1}}>
      <Container>{children}</Container>
    </ScrollView>
  ),
);

const Container = styled.View`
  height: 100%;
  padding-horizontal: ${SCREEN_PADDING.horizontal}px;
  padding-top: ${SCREEN_PADDING.top}px;
  padding-bottom: ${SCREEN_PADDING.bottom}px;
`;
