import {ScreenContainer} from '@components/ScreenContainer';
import {
  HEADER_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_PADDING,
  SCREEN_WIDTH,
} from '@constants/ui';
import React, {memo, useCallback, useMemo, useState} from 'react';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {PlayerNameForm} from './components/PlayerNameForm';
import {Slides} from './components/Slides';
import {OrientationType} from 'react-native-orientation-locker';
import {useAppSelector} from '@state/hooks';

export const OnboardScreen = memo(() => {
  const orientation = useAppSelector(state => state.app.orientation);
  const [name, setName] = useState('');

  const ref = React.useRef<ICarouselInstance>(null);
  const widthBase = SCREEN_WIDTH - SCREEN_PADDING.horizontal * 2;
  const heightBase = SCREEN_HEIGHT - SCREEN_PADDING.vertical * 2;

  const scrollToNextSlide = useCallback(() => {
    ref?.current?.scrollTo({
      index: ref?.current?.getCurrentIndex() + 1,
      animated: true,
    });
  }, [ref]);

  const scrollToPrevSlide = useCallback(() => {
    ref?.current?.scrollTo({
      index: ref?.current?.getCurrentIndex() - 1,
      animated: true,
    });
  }, [ref]);

  const isPortrait = useMemo(
    () => orientation.includes(OrientationType.PORTRAIT),
    [orientation],
  );

  const width = useMemo(() => {
    if (isPortrait) {
      return widthBase;
    } else {
      return heightBase;
    }
  }, [isPortrait]);

  const height = useMemo(() => {
    if (isPortrait) {
      return heightBase - HEADER_HEIGHT - 200;
    } else {
      return widthBase - HEADER_HEIGHT;
    }
  }, [isPortrait]);

  return (
    <ScreenContainer>
      <Carousel
        ref={ref}
        loop={false}
        width={width}
        height={height}
        data={[PlayerNameForm, PlayerNameForm, PlayerNameForm]}
        scrollAnimationDuration={1000}
        renderItem={({index}) => {
          return (
            <Slides
              index={index}
              name={name}
              updateName={setName}
              scrollToNextSlide={scrollToNextSlide}
              scrollToPrevSlide={scrollToPrevSlide}
            />
          );
        }}
      />
    </ScreenContainer>
  );
});
