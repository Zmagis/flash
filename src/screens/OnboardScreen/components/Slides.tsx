import React, {memo, useCallback, useMemo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {PlayerNameForm} from './PlayerNameForm';
import {Button} from '@components/Button';
import {Route} from '@types/routes';
import {useNavigation} from '@hooks/useNavigate';
import {useAppDispatch} from '@state/hooks';
import {setUserName} from '@state/user/UserSlice';
import {storage} from '@utils/storage';
import {storageKeys} from '@constants/storageKeys';

type SlideProps = {
  index: number;
  name: string;
  updateName: (text: string) => void;
  scrollToNextSlide: () => void;
  scrollToPrevSlide: () => void;
};

export const Slides = memo<SlideProps>(
  ({index, name, updateName, scrollToNextSlide, scrollToPrevSlide}) => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const finishOnboarding = useCallback(async () => {
      dispatch(setUserName(name));
      await storage.setItem(storageKeys.CURRENT_PLAYER, name);
      navigation.navigate(Route.Root);
    }, [name]);

    const slideContent = useMemo(() => {
      if (index === 0) {
        return (
          <Container>
            <InnerContainer>
              <Title>Welcome to FLASH game!</Title>
              <Description>
                Zoom and zap your way to a high score-be speedy and spot-on!
              </Description>
            </InnerContainer>
            <Button onPress={scrollToNextSlide}>Next</Button>
          </Container>
        );
      } else if (index === 1) {
        return (
          <Container>
            <InnerContainer>
              <PlayerNameForm name={name} updateName={updateName} />
            </InnerContainer>
            <Button onPress={scrollToNextSlide}>Next</Button>
          </Container>
        );
      } else if (index === 2) {
        return (
          <Container>
            <InnerContainer>
              <Title>
                {name
                  ? `${name}, you're all set up!`
                  : 'Come on now, don’t be silly — tell us your name!'}
              </Title>
            </InnerContainer>
            {name ? (
              <Button onPress={finishOnboarding}>Let's play</Button>
            ) : (
              <Button onPress={scrollToPrevSlide}>Go back</Button>
            )}
          </Container>
        );
      }
    }, [index, name]);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: '100%',
        }}>
        <Container>{slideContent}</Container>
      </View>
    );
  },
);

const Container = styled.View`
  text-align: center;
  padding: 16px;
  flex: 1;
`;

const InnerContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 16px;
`;

const Description = styled.Text`
  text-align: center;
`;
