import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../../foundation/Text';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../../theme/utils/propToStyle';

const Label = styled.label`
    color: ${({ theme }) => theme.colors.tertiary.main.color};

    ${propToStyle('marginTop')};
    ${propToStyle('marginBottom')};
    
    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariants.highlightSubtitle}
        `,
    md: css`
            ${TextStyleVariants.menu}
        `,
  })}

`;

export default Label;
