import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 67px;
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  border-top: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

HeaderWrapper.LeftSide = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  
  display: flex;
  align-items: center;

`;

HeaderWrapper.RightSide = styled.nav`

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  a{
    text-decoration: none;
    transition: 200ms ease-ease-in-out;
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.tertiary.main.color}
  }
  li{
    padding: 0 19px;
  }
`;

export default HeaderWrapper;
