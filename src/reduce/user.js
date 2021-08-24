const initState = {
  phone: "",
  token: "",
};

export const actionUpdatePhone = (payload) => {
  return {
    type: "UPDATE_PHONE",
    payload,
  };
};

export const actionUpdateToken = (payload) => {
  return {
    type: "UPDATE_TOKEN",
    payload,
  };
};

const reducer = (state = initState, action) => {
  let { payload, type } = action;

  switch (type) {
    case "UPDATE_PHONE":
      return {
        ...state,
        phone: payload,
      };
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
