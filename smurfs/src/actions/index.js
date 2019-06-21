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
      dispatch({ type: FETCHING_FAILURE, payload: "fetching smurf failed" });
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
