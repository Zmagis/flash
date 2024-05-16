import {useAppDispatch, useAppSelector} from '@state/hooks';
import {setUserName} from '@state/user/UserSlice';
import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';

type UserNameProps = {
  name: string;
};

export const UserItem = memo<UserNameProps>(({name}) => {
  const userName = useAppSelector(state => state.user.userName);
  const dispatch = useAppDispatch();
  const onPress = useCallback(() => dispatch(setUserName(name)), []);
  const isActive = userName === name;

  return (
    <Button
      key={name}
      isActive={isActive}
      disabled={isActive}
      onPress={onPress}>
      <Text isActive={isActive}>{name}</Text>
    </Button>
  );
});

const Button = styled.TouchableOpacity<{isActive: boolean}>`
  padding: 12px 14px;
  background-color: ${({isActive, theme}) =>
    isActive ? theme.colors.secondary : 'transparent'};
`;

const Text = styled.Text<{isActive: boolean}>`
  font-weight: 700;
  color: ${({isActive, theme}) =>
    isActive ? theme.colors.lightText : theme.colors.text};
`;
