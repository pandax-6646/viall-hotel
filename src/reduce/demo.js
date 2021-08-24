const initState = {
  count: 0,
};

export const actionUpdateCount = (payload) => {
  return {
    type: "UPDATE_COUNT",
    payload,
  };
};

export default (state = initState, action) => {
  let { payload, type } = action;

  switch (type) {
    case "UPDATE_COUNT":
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};
