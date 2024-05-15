import React, {PropsWithChildren, memo} from 'react';
import styled from 'styled-components/native';

type InputProps = PropsWithChildren<{
  value: string;
  placeholder?: string;
  label?: string;
  error?: string;
  onChangeText: (text: string) => void;
}>;

export const Input = memo<InputProps>(
  ({value, placeholder, label, error, onChangeText}) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  },
);

// TODO: use theme
const Container = styled.View<{width?: number}>`
  width: ${({width}) => (width ? `${width}%` : 'undefined')};
`;

const Label = styled.Text`
  margin-bottom: 8px;
  font-weight: 700;
`;

const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
`;

// TODO: use theme
const TextInput = styled.TextInput<{width?: number}>`
  color: #333;
  padding: 12px 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  width: 100%;
`;
