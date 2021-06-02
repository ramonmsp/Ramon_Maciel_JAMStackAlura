import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

export const CardArea = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;
    margin: 8px;
    order: 1;

    border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
`;

Card.Image = styled.img`
    width: 288px;
    height: 177px;

    ${breakpointsMedia({
    md: css`
            width: 287px;
            height: 390px;
        `,
  })}
`;

Card.Text = styled.span`
    padding: 19px 0;
    ${TextStyleVariants.cardTitleMobile}



    ${breakpointsMedia({
    md: css`
            padding: 41px 0;
            ${TextStyleVariants.cardTitle}
        `,
  })}

`;
