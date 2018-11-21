// @flow
/**
 * @author renmaomin@126.com
 */
import * as React from 'react';
import styled, { css, withTheme } from 'styled-components';
import compose from 'recompose/compose';
import humps from 'humps';
import defaultProps from 'recompose/defaultProps';
import type { HOC } from 'recompose';
import  {buttonTheme} from './theme';


const changeColor = (colors) => {
  if (!colors) {
    return null;
  }
  return { ...colors, color: colors['background-color'], 'background-color': colors.color };
};

const getStyles = ({ typeStyle, reverse, theme }) => {
  let colors = theme.colorScheme[typeStyle] || theme.colorScheme.normal;

  colors = humps.decamelizeKeys(colors, { separator: '-' });

  return reverse ? changeColor(colors) : colors;
};

const sizeProps = ({ size, theme }) => {
  const sizes = theme.sizeScheme[size] || theme.sizeScheme.normal;

  console.log('styled theme:', theme)

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

const disabledProps = ({ disabled, theme }) => (disabled ? { opacity: `${theme.common.disabledOpacity}` } : null);

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
  border: ${props => props.theme.common.borderWidth} solid;
  font-weight: ${props => props.theme.common.fontWeight};
  line-height: ${props => props.theme.common.lineHeight};
  ${sizeProps};
  ${getStyles};
  ${getDashed};
  ${getText};
  ${blockProps};
  ${disabledProps};
`;

const AStyled = styled.a`
  border: ${props => props.theme.common.borderWidth} solid;
  font-weight: ${props => props.theme.common.fontWeight};
  line-height: ${props => props.theme.common.lineHeight};
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

  console.log('this.props:', props)

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
  children: any,
  theme: any
};

const enhancer: HOC<*, PropTypes> = compose(
  withTheme,
  defaultProps({
    reverse: false,
    dashed: false,
    text: false,
    size: 'normal',
    block: false,
    loading: false,
    disabled: false,
    icon: '',
    theme: buttonTheme
  }),
);

export default enhancer(Button);
