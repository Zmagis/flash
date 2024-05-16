import React, {memo, useCallback, useMemo, useState} from 'react';

import {useAppDispatch, useAppSelector} from '@state/hooks';
import {setUserName} from '@state/user/UserSlice';

import {Button} from '@components/Button';
import {Input} from '@components/Input';
import styled from 'styled-components/native';
import {USER_NAME_LENGTH} from '@constants/user';

export const NewUserForm = memo(() => {
  const results = useAppSelector(state => state.results.results);
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');

  const users = useMemo(() => (results ? Object.keys(results) : []), [results]);

  const updateName = useCallback((text: string) => {
    setName(text);
  }, []);

  const saveName = useCallback(() => {
    dispatch(setUserName(name));
    setName('');
  }, [name]);

  return (
    <Container>
      <Input
        value={name}
        label={'Add new user'}
        maxLength={USER_NAME_LENGTH}
        error={users.includes(name) ? 'User already exists' : ''}
        onChangeText={updateName}
      />
      <Button disabled={users.includes(name) || !name} onPress={saveName}>
        Add
      </Button>
    </Container>
  );
});

const Container = styled.View`
  gap: 16px;
`;
