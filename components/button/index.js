// @flow
/**
 * @author renmaomin@126.com
 */
import * as React from 'react';
import styled, { css } from 'styled-components';
import compose from 'recompose/compose';
import humps from 'humps';
import defaultProps from 'recompose/defaultProps';
import type { HOC } from 'recompose';
import { buttonTheme } from './color';


const changeColor = (colors) => {
  if (!colors) {
    return null;
  }
  return { ...colors, color: colors['background-color'], 'background-color': colors.color };
};

const getStyles = ({ typeStyle, reverse }) => {
  let colors = buttonTheme.colorScheme[typeStyle] || buttonTheme.colorScheme.normal;

  colors = humps.decamelizeKeys(colors, { separator: '-' });

  return reverse ? changeColor(colors) : colors;
};

const sizeProps = ({ size }) => {
  const sizes = buttonTheme.sizeScheme[size] || buttonTheme.sizeScheme.normal;

  return css`
    padding: ${sizes.paddingX} ${sizes.paddingY};
    font-size: ${sizes.fontSize};
    border-radius: ${sizes.borderRadius};
  `;
};

const blockProps = ({ block }) => (block ? css`
    display: block;
    width: 100%;
  ` : null);

const disabledProps = ({ disabled }) => (disabled ? { opacity: `${buttonTheme.common.disabledOpacity}` } : null);

const getText = ({ text }) => {
  if (text) {
    return {
      'border-color': '#0000',
      background: '#0000',
    };
  }
  return {};
};

const getDashed = ({ dashed }) => (dashed ? { 'border-style': 'dashed' } : null);

const ButtonStyled = styled.button`
  border: ${buttonTheme.common.borderWidth} solid;
  font-weight: ${buttonTheme.common.fontWeight};
  line-height: ${buttonTheme.common.lineHeight};
  ${sizeProps};
  ${getStyles};
  ${getDashed};
  ${getText};
  ${blockProps};
  ${disabledProps};
`;

const AStyled = styled.a`
  border: ${buttonTheme.common.borderWidth} solid;
  font-weight: ${buttonTheme.common.fontWeight};
  line-height: ${buttonTheme.common.lineHeight};
  ${sizeProps};
  ${getStyles};
  ${getDashed};
  ${getText};
  ${blockProps};
  ${disabledProps};
`;

const Button = ({type, icon, children, ...props}) => {
  const { href } = props;
  const ComponentWrapper = href ? AStyled : ButtonStyled;

  return (
    <ComponentWrapper typeStyle={type} {...props}>
      <span>{icon} {children}</span>
    </ComponentWrapper>
  );
};

type PropTypes = {
  type: 'primary'|'success'|'info'|'warning'|'danger',
  reverse: boolean,
  dashed: boolean,
  text: boolean,
  size: 'large'|'normal'|'small',
  block: boolean,
  icon?: React.Node,
  loading: boolean,
  href: string,
  disabled: boolean,
  children: any
};

const enhancer: HOC<*, PropTypes> = compose(
  defaultProps({
    reverse: false,
    dashed: false,
    text: false,
    size: 'normal',
    block: false,
    loading: false,
    disabled: false,
    icon: '',
  }),
);

export default enhancer(Button);
