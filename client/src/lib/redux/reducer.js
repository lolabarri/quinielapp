const initialStore = {
  user: {},
  matchday: 1
};

export const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "INCREMENT_MATCHDAY":
            store = {
                ...store,
                matchday: store.matchday+1
            }
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
  // For now, don't handle any actions
  // and just return the store given to us.
  return store;
};