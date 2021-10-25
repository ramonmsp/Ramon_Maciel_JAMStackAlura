import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from '../../../theme/utils/propToStyle';

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

const cardTitle = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.cardTitle.fontSize};
    font-weight: ${theme.typographyVariants.cardTitle.fontWeight};
    line-height: ${theme.typographyVariants.cardTitle.lineHeight};
  `}
`;

const cardTitleMobile = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.cardTitleMobile.fontSize};
    font-weight: ${theme.typographyVariants.cardTitleMobile.fontWeight};
    line-height: ${theme.typographyVariants.cardTitleMobile.lineHeight};
  `}
`;

const highlightXs = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.highlightXs.fontSize};
    font-weight: ${theme.typographyVariants.highlightXs.fontWeight};
    line-height: ${theme.typographyVariants.highlightXs.lineHeight};
  `}
`;

const highlight = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.highlight.fontSize};
    font-weight: ${theme.typographyVariants.highlight.fontWeight};
    line-height: ${theme.typographyVariants.highlight.lineHeight};
  `}
`;

const highlightSubtitle = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.highlightSubtitle.fontSize};
    font-weight: ${theme.typographyVariants.highlightSubtitle.fontWeight};
    line-height: ${theme.typographyVariants.highlightSubtitle.lineHeight};
  `}
`;

const modalTitle = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.modalTitle.fontSize};
    font-weight: ${theme.typographyVariants.modalTitle.fontWeight};
    line-height: ${theme.typographyVariants.modalTitle.lineHeight};
  `}
`;

const cardText = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.cardText.fontSize};
    font-weight: ${theme.typographyVariants.cardText.fontWeight};
    line-height: ${theme.typographyVariants.cardText.lineHeight};
  `}
`;

const projectName = css`
    ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typographyVariants.projectName.fontSize};
    font-weight: ${theme.typographyVariants.projectName.fontWeight};
    line-height: ${theme.typographyVariants.projectName.lineHeight};
  `}
`;

export const TextStyleVariants = {
  menu,
  subTitle,
  title,
  section,
  cardTitle,
  cardTitleMobile,
  cardText,
  highlightXs,
  highlight,
  highlightSubtitle,
  modalTitle,
  projectName,
};

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariants[variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')} ;
    ${propToStyle('marginBottom')};
    ${propToStyle('marginTop')};
    ${propToStyle('margin')};
    ${propToStyle('paddingLeft')};
    ${propToStyle('paddingRight')};
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
