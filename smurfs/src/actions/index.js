import axios from "axios";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const PUT_DATA_START = "PUT_DATA_START";
export const PUT_DATA_SUCCESS = "PUT_DATA_SUCCESS";
export const PUT_DATA_FAIL = "PUT_DATA_FAIL";

export const DELETE_DATA_START = "DELETE_DATA_START";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAIL = "DELETE_DATA_FAIL";

export const fetchData = () => dispatch => {
  dispatch({ type: GET_SMURF_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("%cThis is RES for AXIOS.GET", "color: limegreen;", res);
      dispatch({ type: GET_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(
        "%cThis is ERR for AXIOS.GET",
        "color: magenta; text-transform: uppercase;",
        err
      );
      dispatch({ type: GET_SMURF_FAIL, payload: err.message });
    });
};

export const postData = data => dispatch => {
  dispatch({ type: POST_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => {
      console.log("%cThis is RES for AXIOS.POST", "color: limegreen;", res);
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(
        "%cThis is ERR for AXIOS.POST",
        "color: magenta; text-transform: uppercase;",
        err
      );
      dispatch({ type: POST_SMURF_FAIL, payload: err.message });
    });
};

export const putData = (id, data) => dispatch => {
  dispatch({ type: PUT_DATA_START });

  axios
    .put(`http://localhost:3333/smurfs/${id}`, data)
    .then(res => {
      console.log("%cThis is RES for AXIOS.PUT", "color: limegreen;", res);
      dispatch({ type: PUT_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(
        "%cThis is ERR for AXIOS.PUT",
        "color: magenta; text-transform: uppercase;",
        err
      );
      dispatch({ type: PUT_DATA_FAIL, payload: err.message });
    });
};

export const deleteData = id => dispatch => {
  dispatch({ type: DELETE_DATA_START });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("%cThis is RES for AXIOS.DELETE", "color: limegreen;", res);
      dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(
        "%cThis is ERR for AXIOS.DELETE",
        "color: magenta; text-transform: uppercase;",
        err
      );
      dispatch({ type: DELETE_DATA_FAIL, payload: err.message });
    });
};
