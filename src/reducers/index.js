import { combineReducers } from 'redux';
import AppReducer from './app_reducer'


const rootReducer = combineReducers({
  //state is called 'astronomy' - once we've called mapStateToProps the data will be inside 'this.props.astronomy' in connected components
  astronomy: AppReducer
})


export default rootReducer;
