export const courses = (state = [], action) => {
  switch (action.type) {
    case 'LOADED_COURSES':
      return {
        ...state,
        items: action.items
      };
    case 'SELECT_COURSES':
      const numTotal = state.items.length;
      const numSelected = state.items.filter(t => t.selected).length;
      return {
        ...state,
        items: state.items.map(t => {
          return {
            ...t,
            selected: (numSelected !== numTotal)
          };
        })
      };
    case 'SELECT_COURSE':
      return {
        ...state,
        items: state.items.map(t => {
          return course(t, action);
        })
      };
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
