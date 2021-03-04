import styled, {css} from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const WrapperProjects = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 32px 0;

    ${breakpointsMedia({
        md: css`
            padding: 64px 0;
        `,
    })}
`;

export default WrapperProjects;