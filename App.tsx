import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';
import React, { createContext, useReducer, useState } from 'react';
import { AuthContext } from './context/AuthContext';

const Stack = createNativeStackNavigator();

interface UserInterface {
  email: string,
  username: string,
  age: number,
  id: number
}

export type ProductType = {
  id: number,
  name: string,
  price: number,
  desc?: string
  image?: string,
}

export type InitState = {
  loading: boolean,
  isLogin: boolean,
  token?: string | null,
  user?: UserInterface | null,
  users: UserInterface[],
  product: ProductType[]
}

export type stateSetterType = {
  login: (email: string, password: string) => void,
  logout: () => void,
  setProduct: (product: ProductType[]) => void,
  setUser: (users: UserInterface[]) => void,
}

export default function App() {

  const initState: InitState = {
    loading: false,
    isLogin: true, // bypass for development
    token: "dadadasdas asdasdasdas asda sd",
    user: null,
    users: [],
    product: []
  }

  const ACTION_TYPE = {
    SET_LOADING: "state/loading",
    LOGIN: "auth/login",
    LOGOUT: "auth/logout",
    RESTORE_TOKEN: "auth/restore-token",
    SET_USERS: "users/set_users",
    SET_PRODUCTS: "product/set_product"
  }

  const [state, dispatch] = useReducer((prevVal, action) => {
    switch (action.type) {
      case ACTION_TYPE.SET_LOADING:
        return {
          ...prevVal,
          loading: action.payload
        }
      case ACTION_TYPE.LOGIN:
        return {
          ...prevVal,
          loading: false,
          isLogin: true,
          token: action.payload.token,
          user: action.payload.user,
        }
      case ACTION_TYPE.LOGOUT:
        return {
          ...prevVal,
          loading: false,
          isLogin: false,
          token: null,
          user: null
        }
      case ACTION_TYPE.RESTORE_TOKEN:
        return {
          ...prevVal,
          token: action.payload
        }
      default:
        return prevVal;
    }
  }, initState);

  const stateSetter = React.useMemo(() => ({
    login: (email: string, password: string) => {
      RequestLoading();
      // Ketika login ngapain
      const user: UserInterface = { username: "jajang", email: email, age: 25, id: 2 }
      dispatch({ type: ACTION_TYPE.LOGIN, payload: { token: "base64|asdausydausgdaygduyadvyastasgdabcahidnaoscuda", user, } })
    },
    logout: () => {
      //* Clear semua data pada reducer
      RequestLoading();
      dispatch({ type: ACTION_TYPE.LOGOUT })
    },
    setProduct: (product: ProductType[]) => {
      //TODO: Set product ketika sudah login atau mengakses halaman home
    },
    setUser: (users: UserInterface[]) => {
      //TODO: set users ketika sudah login atau mengakses halaman home
    },
  }), [])


  const RequestLoading = (value = true) => {
    dispatch({ type: ACTION_TYPE.SET_LOADING, payload: value });
  }
  return (
    <AuthContext.Provider value={{ state, setter: stateSetter }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}