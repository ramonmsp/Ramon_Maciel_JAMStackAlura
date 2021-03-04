import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';

const subTitle = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
  `}
`;

const title = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const menu = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.menu.fontSize};
    font-weight: ${theme.typographyVariants.menu.fontWeight};
    line-height: ${theme.typographyVariants.menu.lineHeight};
  `}
`;

const section = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.section.fontSize};
    font-weight: ${theme.typographyVariants.section.fontWeight};
    line-height: ${theme.typographyVariants.section.lineHeight};
  `}
`;


export const TextStyleVariants = {
  menu,
  subTitle,
  title,
  section,
};

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariants[variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')} ;
    ${propToStyle('marginBottom')};
    ${propToStyle('margin')};
`;

// eslint-disable-next-line func-names
const Text = function ({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}

    </TextBase>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

export default Text;
