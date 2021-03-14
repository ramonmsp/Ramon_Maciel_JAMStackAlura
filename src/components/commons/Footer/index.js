import React from 'react';
import FooterWrapper from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.IconsContainer>
        <FooterWrapper.LinkImage href="https://www.twitter.com">
          <FooterWrapper.Icon src="/images/twitter.svg" />
        </FooterWrapper.LinkImage>
        <FooterWrapper.LinkImage href="https://www.github.com/ramonmsp">
          <FooterWrapper.Icon src="/images/github.svg" />
        </FooterWrapper.LinkImage>
      </FooterWrapper.IconsContainer>
    </FooterWrapper>

  );
}
