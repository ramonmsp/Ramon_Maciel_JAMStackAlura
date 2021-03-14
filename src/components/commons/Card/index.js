import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './styles';

export default function CustomCard({ title, src }) {
  return (
    <Card>
      <Card.Image src={src} />
      <Card.Text>
        {title}
      </Card.Text>
    </Card>

  );
}

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
