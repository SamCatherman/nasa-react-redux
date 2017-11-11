export default (state = {}, action) => {
//two arguments, initial state set to an empty object, and an action
// reducers always return state
  switch(action.type) {

    case 'FETCH_DATA':
      const newState = Object.assign({}, ...state, action.payload.data)
      return newState;

    default:
      return state;

  }
}
