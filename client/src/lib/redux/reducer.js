const initialStore = {
  user: null,
  favoritePokemon: null,
  messages: []
};

export const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "SELECT_POKEMON":
      store = {
        ...store,
        favoritePokemon: action.pokemon
      };
      break;
    case "UNSELECT_POKEMON":
      store = {
        ...store,
        favoritePokemon: null
      };
      break;
    case "ADD_MESSAGE":
      store = {
        ...store,
        messages: [action.message]
      };
      break;
    case "DELETE_ALL_MESSAGES":
      store = {
        ...store,
        messages: []
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
  // For now, don't handle any actions
  // and just return the store given to us.
  return store;
};