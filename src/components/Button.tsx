import React, {PropsWithChildren, memo} from 'react';
import {GestureResponderEvent, Text} from 'react-native';
import styled from 'styled-components/native';

type ButtonProps = PropsWithChildren<{
  onPress: (event: GestureResponderEvent) => void;
}>;

export const Button = memo<ButtonProps>(({children, onPress}) => {
  return (
    <Container disabled={false} onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
});

const Container = styled.TouchableOpacity<{width?: number}>`
  background-color: goldenrod;
  padding: 4px 14px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  width: ${({width}) => (width ? `${width}%` : 'undefined')};
`;
