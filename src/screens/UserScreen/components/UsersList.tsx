import React, {memo} from 'react';
import styled from 'styled-components/native';

export const UsersList = memo(() => {
  return (
    <>
      <Text>Select existing user:</Text>
    </>
  );
});

const Text = styled.Text`
  font-weight: 700;
  color: ${({theme}) => theme.colors.text};
`;
