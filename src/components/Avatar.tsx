import {useAppSelector} from '@state/hooks';
import React, {memo} from 'react';
import styled from 'styled-components/native';

export const Avatar = memo(() => {
  const name = useAppSelector(state => state.user.userName);

  return (
    <Container>
      <Text>{name.charAt(0).toUpperCase()}</Text>
    </Container>
  );
});

const Container = styled.View`
  padding: 8px;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme}) => theme.colors.lightText};
`;
