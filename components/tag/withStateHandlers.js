import { withStateHandlers } from 'recompose';

const initialState = {
  visible: true,
};

const handleCloseClick = () => () => ({
  visible: false,
});

const withChangeVisibleState = withStateHandlers(initialState, {
  handleCloseClick,
});

export default withChangeVisibleState;
