export const courses = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_COURSES':
      const numSelected = state.filter(t => t.selected).length;
      return state.map(t => {
        return {
          ...t,
          selected: (numSelected !== state.length)
        };
      });
    case 'SELECT_COURSE':
      return state.map(t => {
        return course(t, action);
      });
    default:
      return state;
  }
};

export const course = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_COURSE':
      return (state.id === action.id)
        ? {
          ...state,
          selected: !state.selected
        }
        : state;
    default:
      return state;
  }
};
