import React from 'react';
import HightlightWrapper from './styles';
import PropTypes from 'prop-types';

const HighlightCard = ({title, detail, src}) => {

    return(
        <HightlightWrapper>
            <HightlightWrapper.Image src={src}>
            <HightlightWrapper.HighlightContainer>
                < HightlightWrapper.HighlightText>
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


}

HighlightCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    detail: PropTypes.string,
};

export default HighlightCard;
