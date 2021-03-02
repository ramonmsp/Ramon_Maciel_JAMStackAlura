import React from 'react';
import Text from '../../foundation/Text';
import Logo from '../Logo';
import HeaderWrapper from './styles/HeaderWrapper';

const Header = () => {
  const links = [
    {
      text: 'Sobre Mim',
      url: '/about',
    },
    {
      text: 'Contato',
      url: '/contact',
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide>
        {
          links.map((link) => (
            <li key={link.url}>
              <Text tag="a" variant="menu" href={link.url}>
                {link.text}
              </Text>
            </li>
          ))
        }
      </HeaderWrapper.RightSide>
    </HeaderWrapper>

  );
};

export default Header;
