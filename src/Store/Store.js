import { createStore } from 'redux';

const initialState = {
    counter:123132,
 };
 const Reducerfn = (state = initialState, action) => {
    switch (action.type) {
       case 'inc':
          return Object.assign({}, state, {
             counter:state.counter+1
          })
       case 'dec':
          return Object.assign({}, state, {
             counter:state.counter-1,
 
          })
       case 'double':
          return Object.assign({}, state, {
             counter:state.counter * 2,
          })
       default:
          return state;
    }
 }

const Store = createStore(Reducerfn);

export default Store;
