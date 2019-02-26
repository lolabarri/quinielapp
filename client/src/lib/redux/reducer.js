const initialStore = {
  user: {},
  matchday: {}
};

export const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    // case "INCREMENT_MATCHDAY":
    //   store = {
    //     ...store,
    //     matchday: store.matchday + 1
    //   };
    //   break;
    case "MATCHDAY":
      store = {
        ...store,
        matchday: action.matchday
      };
      break;
    case "LOGIN":
      store = {
        ...store,
        user: action.user
      };
      break;
    case "LOGOUT":
      store = {
        ...store,
        user: null
      };
      break;
    default:
      return store;
  }
  return store;
};
