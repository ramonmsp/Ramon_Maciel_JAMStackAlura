import React from 'react';
import PropTypes from 'prop-types';
import HightlightWrapper from './styles';

const HighlightCard = ({ title, detail, src }) => (
  <HightlightWrapper>
    <HightlightWrapper.Image src={src}>
      <HightlightWrapper.HighlightContainer>
        <HightlightWrapper.HighlightText>
          Destaque
        </HightlightWrapper.HighlightText>
      </HightlightWrapper.HighlightContainer>
    </HightlightWrapper.Image>
    <HightlightWrapper.TitleContainer>
      <HightlightWrapper.Title>
        {title}
      </HightlightWrapper.Title>
      <HightlightWrapper.Subtitle>
        {detail}
      </HightlightWrapper.Subtitle>
    </HightlightWrapper.TitleContainer>
  </HightlightWrapper>

);

HighlightCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default HighlightCard;
