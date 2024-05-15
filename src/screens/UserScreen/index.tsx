import React, {memo} from 'react';

import {ScreenContainer} from '@components/ScreenContainer';
import {NewUserForm} from './components/NewUserForm';
import {UsersList} from './components/UsersList';

export const UserScreen = memo(() => (
  <ScreenContainer>
    <NewUserForm />
    <UsersList />
  </ScreenContainer>
));
