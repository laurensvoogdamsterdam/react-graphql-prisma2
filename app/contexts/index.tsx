import React, { createContext } from "react";
import { Dispatch } from "react";

export enum ActionType {
  LOGIN = "login",
  LOGOUT = "logout",
  LOADING = "LOADING",
  SIGNUP = "signup",
  ME = "me",
  FEED = "feed",
  SET_TOKEN = "setToken",
  SET_LOADING = "setLoading",
  WORK_AROUND = "WORK_AROUND",
}

export interface LoginAction {
  type: ActionType.LOGIN;
  token: string | (() => string) | undefined;
}

export interface LogoutAction {
  type: ActionType.LOGOUT;
  token: string | (() => string) | undefined;
}

export interface LoadingAction {
  type: ActionType.LOADING;
  token: boolean;
}

export interface SetTokenAction {
  type: ActionType.SET_TOKEN;
  token: string | (() => string) | undefined;
}

export type AppActions = LoginAction | LogoutAction | LoadingAction | SetTokenAction;

interface AppState {
  data: null;
  loading: boolean;
  error: null;
  accessToken: null | string;
}

//  App context
export const initialState: AppState = {
  data: null,
  loading: true,
  error: null,
  accessToken: "hello",
};

export const appReducers = (prevState: any, action: AppActions) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const AuthContext = createContext({});
