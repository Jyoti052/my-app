import { createAction, createReducer } from '@reduxjs/toolkit'

//const increment = createAction('counter/increment')
const incrementByAmount = createAction('counter/incrementByAmount') //Action

const initialState = { value: 0 }  //Initial Store

const rootReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
    
})

export {incrementByAmount};     // we also have to export actions..
export default rootReducer;