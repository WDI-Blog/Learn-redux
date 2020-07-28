export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const showText = () => {
  return {
    type: "SHOW",
  };
};

export const hideText = () => {
  return {
    type: "HIDE",
  };
};
