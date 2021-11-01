let accessToken = "";
import { ACCESS_TOKEN_LOCATION } from "../constants/api";
import * as SecureStore from "expo-secure-store";

export const setAccessToken = async (accessToken: string) => {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_LOCATION, accessToken);
    return true;
  } catch {
    (err: any) => {
      return false;
    };
  }
};

export const getAccessToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(ACCESS_TOKEN_LOCATION);
    if (token) {
      return token;
    }
    return null;
  } catch {
    (err: any) => {
      return null;
    };
  }
};
