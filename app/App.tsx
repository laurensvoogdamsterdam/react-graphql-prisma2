import React, { useReducer } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { URL } from "./constants/api";
import { getAccessToken } from "./utils/accessToken";
import { ActionType, AppContext, appReducers } from "./contexts";
import { SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { MenuProvider } from "react-native-popup-menu";
import { BottomModalContainer } from "./components";
import AppStack from "./navigation/Stack";
import initialState from "./store/state";
import reducer from "./store/reducer";
import { AuthContext } from "./contexts";
import { createUploadLink } from "apollo-upload-client";

/**
 * This is the endpoint of the backend database server
 */
const httpLink = createUploadLink({
  uri: `${URL}`,
});

/** */
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  try {
    return getAccessToken().then((token) => {
      // return the headers to the context so httpLink can read them
      if (token) {
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          },
        };
      }
    });
  } catch {
    (err: any) => {
      console.log(err);
    };
  }
  return headers;
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloApp = () => {
  const isLoadingComplete = useCachedResources();
  const [state, dispatch] = useReducer(appReducers, initialState);
  const [loadingToken, setLoadingToken] = React.useState(true);

  const colorScheme = useColorScheme();

  React.useEffect(() => {
    const tokenCheck = async () => {
      await getAccessToken()
        .then((token) => {
          if (token) {
            dispatch({ type: ActionType.SET_TOKEN, token: token });
          }
        })
        .catch((e) => null);
    };
    tokenCheck();
    setLoadingToken(false);

    return () => {};
  }, []);

  if (loadingToken) {
    return null;
  } else {
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <AppStack />
        <StatusBar />
      </AppContext.Provider>
    );
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <ApolloProvider client={client}>
        <PaperProvider>
          <MenuProvider>
            <StatusBar />
            <ApolloApp />
            {state?.bottomModal ? <BottomModalContainer /> : null}
          </MenuProvider>
        </PaperProvider>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
  },
});

export default App;
