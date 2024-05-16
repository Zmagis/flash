import React, {useCallback, useEffect, useState} from 'react';
import {MainNavigator} from './navigators/MainNavigator';
import {storage} from '@utils/storage';
import {storageKeys} from '@constants/storageKeys';
import {useAppDispatch} from '@state/hooks';
import {setUserName} from '@state/user/UserSlice';
import {Loader} from '@components/Loader';
import Orientation, {OrientationType} from 'react-native-orientation-locker';
import {setOrientation} from '@state/app/AppSlice';

export const RootContainer = () => {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);
  const dispatch = useAppDispatch();

  const getName = useCallback(async () => {
    const name = await storage.getItem(storageKeys.CURRENT_PLAYER);
    if (name) {
      dispatch(setUserName(name));
    }
    setOnboarded(!!name);
    setLoading(false);
  }, []);

  const changedOrientation = useCallback((orientation: OrientationType) => {
    dispatch(setOrientation(orientation));
  }, []);

  useEffect(() => {
    getName();
    Orientation.addOrientationListener(changedOrientation);

    return () => Orientation.removeOrientationListener(changedOrientation);
  }, []);

  return <>{loading ? <Loader /> : <MainNavigator onboarded={onboarded} />}</>;
};
