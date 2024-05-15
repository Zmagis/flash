import React, {PropsWithChildren, memo} from 'react';
import {GestureResponderEvent} from 'react-native';
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
  padding: 12px 14px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  width: ${({width}) => (width ? `${width}%` : 'undefined')};
`;

const Text = styled.Text`
  font-weight: 700;
  color: ${({theme}) => theme.colors.lightText};
`;
