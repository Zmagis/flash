import {storageKeys} from '@constants/storageKeys';
import {useAppDispatch, useAppSelector} from '@state/hooks';
import {setResults} from '@state/results/ResultsSlice';
import {storage} from '@utils/storage';
import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {UserItem} from './UserItem';
import {View} from 'react-native';

export const UsersList = memo(() => {
  const results = useAppSelector(state => state.results.results);
  const dispatch = useAppDispatch();

  const checkResultsInStorage = useCallback(async () => {
    const rawResults = await storage.getItem(storageKeys.RESULTS);
    const newResults = JSON.parse(rawResults);

    if (newResults) {
      dispatch(setResults(newResults));
    }
  }, []);

  useEffect(() => {
    if (!results) {
      checkResultsInStorage();
    }
  }, []);

  if (!results) {
    return null;
  }

  return (
    <View>
      <Text>Select from existing user:</Text>
      <View>
        {Object.keys(results)?.map(name => (
          <UserItem key={name} name={name} />
        ))}
      </View>
    </View>
  );
});

const Text = styled.Text`
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({theme}) => theme.colors.text};
`;
