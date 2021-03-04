import styled, {css} from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

export const CardArea = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8px;

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    
`;

Card.Image = styled.div`
    width: 289px;
    height: 177px;

    ${breakpointsMedia({
        md:css`
            width: 287px;
            height: 390px;
        `,
    })}
`;