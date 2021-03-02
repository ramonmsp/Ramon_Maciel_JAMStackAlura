import React from 'react';
import Text from '../../foundation/Text';
import CoverWrapper from './styles/CoverWrapper';

export default function Cover() {
  return (
    <CoverWrapper>
      <CoverWrapper.LeftSide />
      <CoverWrapper.Central>
        <Text
          variant="title"
          tag="h1"
          textAlign="center"
        >
          Ramon Maciel
        </Text>
        <Text
          variant="subTitle"
          tag="h2"
        >
          Portfolio
        </Text>
      </CoverWrapper.Central>
      <CoverWrapper.RightSide />
    </CoverWrapper>
  );
}
