import {
  GET_SMURF_FAIL,
  GET_SMURF_SUCCESS,
  GET_SMURF_START,
  POST_SMURF_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  PUT_DATA_FAIL,
  PUT_DATA_START,
  PUT_DATA_SUCCESS,
  DELETE_DATA_FAIL,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_START
} from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  error: "",
  success: "",
  id: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        isFetchingData: true
      };
    case GET_SMURF_SUCCESS:
      console.log("$$$$$ This is GET_SMURF_SUCCESS action", action);
      return {
        ...state,
        smurfs: [[...action.payload]],
        isFetchingData: false,
        error: ""
      };

    case GET_SMURF_FAIL:
      console.log("@@@@@ This is SET_ERROR action", action);
      return {
        ...state,
        error: action.payload
      };

    case POST_SMURF_START:
      return {
        ...state,
        isPostingData: true
      };

    case POST_SMURF_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: ""
      };

    case POST_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        smurfs: [[...action.payload]]
      };

    default:
      return state;
  }
};
