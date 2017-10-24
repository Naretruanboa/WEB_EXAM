

/* add json show web */
export function addCounter(val) {
  return {
    type: "ADD",
    payload: val
  }
};


/*delete on web*/
export function delCounter(val) {
  return {
    type: "SUB",
    payload: val
  }
};
