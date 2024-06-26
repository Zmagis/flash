import React, {PropsWithChildren, memo, useCallback} from 'react';
import styled from 'styled-components/native';

const WIDTH = 25;

type ButtonProps = PropsWithChildren<{
  active: boolean;
  width?: number;
  id: number;
  onPress: (id: number) => void;
}>;

export const Item = memo<ButtonProps>(
  ({active, id, width = WIDTH, onPress}) => {
    const press = useCallback(() => {
      onPress(id);
    }, [id, onPress]);

    return (
      <Container
        android_disableSound
        active={active}
        width={width}
        onPress={press}
      />
    );
  },
);

const Container = styled.Pressable<{width: number; active: boolean}>`
  padding: 24px;
  width: ${({width}) => width}%;
  height: ${({width}) => width}%;
  background-color: ${({active, theme}) =>
    active ? theme.colors.secondary : 'transparent'};
`;
