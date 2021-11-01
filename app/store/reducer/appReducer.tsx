import { ActionType } from "../../contexts";
import { setAccessToken } from "../../utils/accessToken";
import initialState from "../state";

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleBottomModal": {
      const bottomModal = action.payload.bottomModal;
      return {
        ...state,
        bottomModal,
      };
    }
    case "viewTask": {
      const selectedTask = action.payload.selectedTask;
      return {
        ...state,
        selectedTask,
      };
    }
    case "setSearchTab": {
      return {
        ...state,
        searchTab: action.payload,
      };
    }
    case ActionType.ME: {
      return {
        ...state,
        me: action.payload,
      };
    }
    case ActionType.WORK_AROUND: {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    case ActionType.FEED: {
      return {
        ...state,
        feed: action.payload,
      };
    }
    case ActionType.LOGIN: {
      setAccessToken(action.payload.token);
      return {
        ...state,
        ...action.payload,
        accessToken: action.payload.token,
      };
    }
    case ActionType.LOGOUT: {
      setAccessToken(null);
      return {
        ...state,
        ...action.payload,
        accessToken: null,
      };
    }
    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case ActionType.SET_TOKEN: {
      setAccessToken(action.payload.token);
      return {
        ...state,
        ...action.payload,
        accessToken: action.payload,
      };
    }
    case ActionType.SIGNUP: {
      setAccessToken(action.payload.token);
      return {
        ...state,
        ...action.payload,
        accessToken: action.payload.token,
      };
    }
    case "signoff": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "me": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "signoff": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "logout": {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    default:
      return state;
  }
};
