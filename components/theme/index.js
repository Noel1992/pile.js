import * as React from 'react';
import styled, {withTheme} from 'styled-components';

const ButtonStyled = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const AStyled = styled.a`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;


const Button = ({children, ...props}) => {
  const { href } = props;
  const ComponentWrapper = href ? AStyled : ButtonStyled;

  console.log('this.props:', props)

  return (
    <ComponentWrapper {...props}>
      <span>{children}</span>
    </ComponentWrapper>
  );
};

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred",
  }
}

export default withTheme(Button)
