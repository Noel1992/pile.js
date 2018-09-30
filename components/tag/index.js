// @flow
/**
 * @author yanshenshen
 */
import * as React from 'react';
import styled from 'styled-components';
import compose from 'recompose/compose';
import humps from 'humps';
import defaultProps from 'recompose/defaultProps';
import { tagTheme } from './color';
import withStateHandlers from './withStateHandlers';

type PropTypes = {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger',
  reverse: boolean,
  dashed: boolean,
  href: string,
  children: any,
  closeable: boolean,
  visible: boolean,
  onClose: Function,
  handleCloseClick: Function,
};

const changeColor = (colors) => {
  if (!colors) {
    return null;
  }
  return { ...colors, color: colors['background-color'], 'background-color': colors.color };
};

const getStyles = ({ type, reverse }) => {
  let colors = tagTheme.colorScheme[type] || tagTheme.colorScheme.normal;
  colors = humps.decamelizeKeys(colors, { separator: '-' });
  return reverse ? changeColor(colors) : colors;
};

const TagClose = styled.span`
  margin-left: 5px;
`;

const getDashed = ({ dashed }) => (dashed ? { 'border-style': 'dashed' } : null);
const getVisible = ({ visible }) => (!visible ? { display: 'none' } : null);
const TagStyled = styled.button`
  border: ${tagTheme.common.borderWidth} solid;
  font-weight: ${tagTheme.common.fontWeight};
  line-height: ${tagTheme.common.lineHeight};
  padding: ${tagTheme.common.paddingX} ${tagTheme.common.paddingY};
  font-size: ${tagTheme.common.fontSize};
  border-radius: ${tagTheme.common.borderRadius};
  ${getStyles};
  ${getDashed};
  ${getVisible};
`;
const LinkStyled = TagStyled.withComponent('a');
const targetCloseClick = ((handleCloseClick, onClose) => {
  handleCloseClick();
  if (onClose) {
    onClose();
  }
});

const Tag = ({
  children, closeable, onClose, handleCloseClick, ...props
}: PropTypes) => {
  const { href } = props;
  const Wrap = href ? LinkStyled : TagStyled;
  return (
    <Wrap {...props}>
      {children}
      {closeable
        && <TagClose onClick={() => { targetCloseClick(handleCloseClick, onClose); }}>x</TagClose>
      }
    </Wrap>
  );
};

const loadingHOC = compose(
  defaultProps({
    reverse: false,
    dashed: false,
    disabled: false,
    closeable: false,
    visible: true,
    onClose: null,
  }),
  withStateHandlers,
);

export default loadingHOC(Tag);
