import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CoverWrapper = styled.div`
  width: 100%;
  min-height: 100vh; 
  /* background-color: ${({ theme }) => theme.colors.background.light}; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;


  ${breakpointsMedia({

  })}
`;

CoverWrapper.LeftSide = styled.div`

  width: 214.97px;
  height: 280.31px;

  align-self: flex-start;
  align-items: left;

  background: url(/images/planta_2_mobile.svg);
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  background-position: top center; 

  ${breakpointsMedia({
    md: css`
      width: 479.81px;
      height: 595px;
      background: url(/images/planta_2_desktop.svg);
      background-size: 479.81, 719.39;
    `,
  })}
`;

CoverWrapper.RightSide = styled.div`

  width: 214.97px;
  height: 280.31px;

  align-self: flex-end;

  background: url(/images/planta_1_mobile.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;

  ${breakpointsMedia({
    md: css`
      width: 479.81px;
      height: 595px;
      background: url(/images/planta_1_desktop.svg);
      background-size: 479.81, 719.39;
    `,
  })}
`;

CoverWrapper.Central = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  background: none;

  ${breakpointsMedia({
    md: css`
    `,
  })}
`;

export default CoverWrapper;
