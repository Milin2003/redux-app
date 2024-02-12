import React from 'react'
import { ADD_DATA, DELETE_DATA  } from '../actions/action';

const initialstate ={
    data:[],
}

export const reducers = (state =initialstate,action) => {
  switch (action.type) {
    case ADD_DATA:
        return{
            ...state,
            data: [...state.data,action.payload]
        }

        case DELETE_DATA:
        return{
            ...state,
            data: state.data.filter((_,index) => index !== action.payload)
        }

    default:
        return state;
  }
}
