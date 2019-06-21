import axios from "axios";
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
// fetching variable types
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
// adding variable types
export const ADDING_START = "ADDING_START";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";
// updating variable types
export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "ADDING_FAILURE";

// delete variable types
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
// getSmurf action creator
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("FETCHING SUCCESS RESPONSE:", response); // returns an response object
      // console.log("checking response.data", response.data); returned an array
      dispatch({ type: FETCHING_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log("FETCHING FAILURE ERROR: ", err); // haven't gotten an error
      dispatch({ type: FETCHING_FAILURE, payload: "fetching smurfs failed" });
    });
};

// addSmurf action creator
export const addNewSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log("ADDING SUCCESS RESPONSE: ", response); // returns an response object
      // console.log("checking response.data", response.data); returned an array
      dispatch({ type: ADDING_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log("ADDING FAILURE ERROR: ", err); // haven't gotten an error
      dispatch({ type: ADDING_FAILURE, payload: "adding a smurf failed" });
    });
};

// building put updateSmurf actioncreator
export const updateSmurf = (id, updatingField) => dispatch => {
  dispatch({ type: UPDATE_START });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, updatingField)
    .then(response => {
      console.log("UPDATE SUCCESS RESPONSE: ", response);
      dispatch({ type: UPDATE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("UPDATE ERROR: ", error);
      dispatch({ type: UPDATE_FAILURE, payload: error.response });
    });
};

// building deleteSmurf functionality
export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log("DELETE SUCCESS RESPONSE: ", response);
      dispatch({ type: DELETE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("DELETE FAILURE ERROR ", error);
      dispatch({ type: DELETE_FAILURE, payload: "Delete attempt failed" });
    });
};
