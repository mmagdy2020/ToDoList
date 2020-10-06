export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const IS_COMPLETED = "IS_COMPLETED";


export const createToDo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});


export const removeToDo = (text) => ({
    type: REMOVE_TODO,
    payload: { text },
  });
  

  export const completedToDO = (text) => ({
    type: IS_COMPLETED,
    payload: { text },
  });
  