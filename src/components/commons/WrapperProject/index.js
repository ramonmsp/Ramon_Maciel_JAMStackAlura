import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const WrapperProjects = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


    ${breakpointsMedia({
    md: css`
            flex-direction: row;
        `,
  })}
`;

export default WrapperProjects;
