export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const AddData = (data) => {
  return {
    type : ADD_DATA,
    payload: data
  }
};

export const deleteData = (index) => {
  return {
    type : DELETE_DATA,
    payload: index
  }
};


