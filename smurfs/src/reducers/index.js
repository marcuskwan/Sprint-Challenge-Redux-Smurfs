/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING_START,
  ADDING_SUCCESS,
  ADDING_FAILURE,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        smurfs: action.payload
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADDING_START:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
    case ADDING_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: "",
        smurfs: action.payload
      };
    case ADDING_FAILURE:
      return {
        ...state,
        addingSmurf: true,
        error: action.payload
      };
    case UPDATE_START:
      return {
        ...state,
        addingSmurf: false,
        updatingSmurf: true,
        error: ""
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        updatingSmurf: false,
        error: "",
        smurfs: action.payload
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        updatingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
