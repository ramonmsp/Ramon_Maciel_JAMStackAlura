import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 68px;
    background-color: ${({ theme }) => theme.colors.secondary.main.color};

`;

FooterWrapper.IconsContainer = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main.color};

`;

FooterWrapper.LinkImage = styled.a`
    display: flex;
    cursor: pointer;
`;

FooterWrapper.Icon = styled.img`
    width: 32px;
    height: 32px;
    margin: 18px;

`;

export default FooterWrapper;
