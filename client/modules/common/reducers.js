export const application = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        drawer: {
          open: !state.drawer.open
        }
      };
    default:
      return state;
  }
};

export const notifications = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
