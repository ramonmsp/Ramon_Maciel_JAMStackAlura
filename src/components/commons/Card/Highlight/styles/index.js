import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../../foundation/Text';

const HightlightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 1px solid tomato;
    margin: 8px;

    order: 0;

    ${breakpointsMedia({
    md: css`
      flex-direction: row;
      align-items: flex-start;
      max-width: 1200px;
      order: 1;
    `,
  })}

`;

HightlightWrapper.Image = styled.div`

  width: 288px;
  height: 177px;

  background: url(${({ src }) => src});


  ${breakpointsMedia({
    md: css`
      width: 593px;
      height: 320px;
    `,
  })}

`;

HightlightWrapper.HighlightContainer = styled.div`
    width: min-content;
    background-color: ${({ theme }) => theme.colors.background.light.color};
    margin-top: 5px;
    margin-left: 4px;
    border: 1px solid ${({ theme }) => theme.colors.borders.main.contrast};


    ${breakpointsMedia({
    md: css`
        margin-top: 12px;
        margin-left: 12px;
    `,
  })}
`;

HightlightWrapper.HighlightText = styled.span`
    padding: 0 28px;
    ${TextStyleVariants.highlightXs}    

    ${breakpointsMedia({
    md: css`
            ${TextStyleVariants.highlight}
            padding: 0 41px;
        `,
  })}


`;

HightlightWrapper.TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    ${breakpointsMedia({
    md: css`
            align-items: flex-start;
            padding-left: 30px;
        `,
  })}



`;

HightlightWrapper.Title = styled.h1`
    ${TextStyleVariants.cardTitleMobile};

    ${breakpointsMedia({
    md: css`
            ${TextStyleVariants.cardTitle};
            margin: 28px 0;
        `,
  })}
`;

HightlightWrapper.Subtitle = styled.h3`
    display: none;                      

    ${breakpointsMedia({
    md: css`
            display: flex;
            ${TextStyleVariants.highlightSubtitle};
        `,
  })}
`;

export default HightlightWrapper;
