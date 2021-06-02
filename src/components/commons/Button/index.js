import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const Button = styled.button`
    color: ${({ theme }) => theme.colors.tertiary.main.color};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
    cursor: pointer;
    width: 46px;
    height: 46px;
    transition: ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover,
    &focus {
    opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
        `,
    md: css`
        ${TextStyleVariants.paragraph1}
        `,
  })}

    ${propToStyle('display')};
    ${propToStyle('borderRadius')};
    ${propToStyle('margin')};
    ${propToStyle('marginTop')};
    ${propToStyle('marginBottom')};
    ${propToStyle('marginLeft')};

    &:disabled {
      cursor: not-allowed;
      opacity: .2;
    };
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

`;

export default Button;
