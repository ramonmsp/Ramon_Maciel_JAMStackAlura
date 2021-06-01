import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundation/Text';
import Label from './label';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  label,
  name,
  onChange,
  value,
  pattern,
  type,
}) {
  return (
    <InputWrapper>
      <Label>
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        pattern={pattern}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  pattern: PropTypes.string,
};
