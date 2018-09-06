// @flow
/**
 * @author renmaomin@126.com
 */
import React from 'react';
import { lifecycle } from 'recompose';
import styled from 'styled-components';
import loadSprite from './loadSprite';
import * as theme from './theme';

type PropTypes = {
  type: 'artboardAdd' | 'artboardReduce' | 'batchExport',
  size: 'small' | 'normal' | 'large',
  svg: any
};


const sizeProps = ({ size }) => {
  let sizeValue = theme.base;
  if (size === 'small') {
    sizeValue = theme.small;
  } else if (size === 'large') {
    sizeValue = theme.large;
  }

  return {
    width: sizeValue,
    height: sizeValue,
  };
};

const IconStyled = styled.svg`
  verticalAlign: -0.15em;
  fill: currentColor;
  overflow: hidden;
  ${sizeProps}
`;

const Icon = ({ type, svg, ...props }:PropTypes) => (
  <IconStyled {...props} viewBox={svg && svg.viewBox}>
    <use xlinkHref={`#${type || svg.id}`} />
  </IconStyled>
);


export default lifecycle({
  componentDidMount() {
    loadSprite();
  },
})(Icon);
