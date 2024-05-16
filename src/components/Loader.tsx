import React, {memo} from 'react';
import styled from 'styled-components/native';

export const Loader = memo(() => {
  return <Text>Loading...</Text>;
});

const Text = styled.Text`
  font-weight: 700;
  color: ${({theme}) => theme.colors.lightText};
`;
