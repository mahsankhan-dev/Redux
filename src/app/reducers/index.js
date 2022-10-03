const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { data, id } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            data,
            id,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default todoReducers;
