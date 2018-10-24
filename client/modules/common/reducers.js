export const menu = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {open: !state.open};
    default:
      return state;
  }
};

export const organization = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const modules = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const notifications = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
