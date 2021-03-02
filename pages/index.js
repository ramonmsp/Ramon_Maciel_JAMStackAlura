import React from 'react';
import Text from '../src/components/foundation/Text';
import Box from '../src/components/foundation/Box';
import Cover from '../src/components/commons/Cover';
import Header from '../src/components/commons/Header';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cover>
        <Text
          variant="title"
          tag="h1"
        >
          Mary Elizabeth
        </Text>
        <Text
          variant="subTitle"
          tag="h2"
        >
          Mary Elizabeth
        </Text>
      </Cover>
      <Header />
    </Box>
  );
}
