import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const SectionProjects = styled.div`

    display: flex;
    justify-content: center;

    padding-top: 32px;
    padding-bottom: 33px;

    ${breakpointsMedia({
    md: css`
            padding-top: 64px;
            padding-bottom: 85px;
        `,
  })}

`;

SectionProjects.Title = styled.section`

    display: flex;
    justify-content: center;

    padding-top: 32px;
    padding-bottom: 33px;

    ${breakpointsMedia({
    md: css`
            padding-top: 64px;
            padding-bottom: 85px;
        `,
  })}

`;

export default SectionProjects;
