const defaultState = {
  booksObj: {},
  shelfPage: false,
};

function updater(state = defaultState, action) {
  switch (action.type) {
    case 'STORE_BOOKS_OBJ': {
      console.log('stroring books obj', action.payload);
      return {
        ...state,
        booksObj: action.payload,
        shelfPage: true,
      };
    }
    default:
      return state;
  }
}

export default updater;

