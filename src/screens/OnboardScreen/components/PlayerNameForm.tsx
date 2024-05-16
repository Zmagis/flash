import React, {memo} from 'react';
import styled from 'styled-components/native';

import {Input} from '@components/Input';
import {USER_NAME_LENGTH} from '@constants/user';

type PlayerNameFormProps = {name: string; updateName: (text: string) => void};

export const PlayerNameForm = memo<PlayerNameFormProps>(
  ({name, updateName}) => {
    return (
      <Container>
        <Input
          value={name}
          label={"What's your name?"}
          maxLength={USER_NAME_LENGTH}
          onChangeText={updateName}
        />
      </Container>
    );
  },
);

const Container = styled.View`
  gap: 16px;
`;
