import constants from './constants.js';

export const tasks = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TASK:
      return [
        ...state,
        task({}, action)
      ];
    case constants.SELECT_TASK:
      return state.map(t => {
        return task(t, action);
      });
    default:
      return state;
  }
};

export const task = (state = {}, action) => {
  switch (action.type) {
    case constants.SELECT_TASK:
      return (state.id === action.id)
        ? {
          id: state.id,
          description: state.description,
          selected: !state.selected
        }
        : state;
    default:
      return state;
  }
};
