import React, {memo, useCallback, useState} from 'react';

import {useAppDispatch, useAppSelector} from '@state/hooks';
import {setUserName} from '@state/user/UserSlice';

import {Button} from '@components/Button';
import {Input} from '@components/Input';
import styled from 'styled-components/native';

export const NewUserForm = memo(() => {
  const userName = useAppSelector(state => state.user.userName);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(userName);

  const updateName = useCallback((text: string) => {
    setName(text);
  }, []);

  const saveName = useCallback(() => {
    dispatch(setUserName(name));
  }, [name]);

  return (
    <Container>
      <Input
        value={name}
        label={'Add new user'}
        // error={'User already exists'}
        onChangeText={updateName}
      />
      <Button onPress={saveName}>Add</Button>
    </Container>
  );
});

const Container = styled.View`
  gap: 16px;
`;
