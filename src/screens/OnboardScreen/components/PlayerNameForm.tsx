import React, {memo} from 'react';
import styled from 'styled-components/native';

import {Input} from '@components/Input';

type PlayerNameFormProps = {name: string; updateName: (text: string) => void};

export const PlayerNameForm = memo<PlayerNameFormProps>(
  ({name, updateName}) => {
    return (
      <Container>
        <Input
          value={name}
          label={"What's your name?"}
          onChangeText={updateName}
        />
      </Container>
    );
  },
);

const Container = styled.View`
  gap: 16px;
`;
