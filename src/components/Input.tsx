import React, {memo} from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  onChangeText: (text: string) => void;
};

export const Input = memo<InputProps>(
  ({value, placeholder, label, error, maxLength, onChangeText}) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <TextInput
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  },
);

const Container = styled.View<{width?: number}>`
  width: ${({width}) => (width ? `${width}%` : 'undefined')};
`;

const Label = styled.Text`
  margin-bottom: 8px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text};
`;

const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.error};
`;

const TextInput = styled.TextInput<{width?: number}>`
  padding: 12px 16px;
  border-radius: 8px;
  border-width: 1px;
  width: 100%;
  color: ${({theme}) => theme.colors.text};
  border-color: ${({theme}) => theme.colors.primary};
`;
