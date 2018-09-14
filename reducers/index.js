import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // state object has key of `libraries` & value of list of libraries produced by `LibraryReducer`
  libraries: LibraryReducer,
  // state object = selectedLibraryId. value of state = SelectionReducer
  selectedLibraryId: SelectionReducer
});
