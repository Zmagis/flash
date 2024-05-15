import React, {memo} from 'react';

import {ScreenContainer} from '@components/ScreenContainer';
import {NewUserForm} from './components/NewUserForm';
import {UsersList} from './components/UsersList';
import styled from 'styled-components/native';

export const UserScreen = memo(() => (
  <ScreenContainer>
    <Container>
      <NewUserForm />
      <UsersList />
    </Container>
  </ScreenContainer>
));

const Container = styled.View`
  gap: 24px;
`;
