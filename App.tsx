import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';
import React, { createContext, useState } from 'react';

const Stack = createNativeStackNavigator();

interface UserInterface {
  email: string,
  username: string
}

export type AuthContextType = {
  user?: {
    email?: string,
    username?: string
  }
  token?: string,
  isLogin?: boolean,
  login: (token: string, user: UserInterface) => void,
  logout: () => void
}


export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  login: () => { },
  logout: () => { }
});

export default function App() {

  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<UserInterface>({ email: "", username: "" });
  const [token, setToken] = useState<string | undefined>('');


  const handleLogin = async (token: string, user: UserInterface) => {
    //* Logic Login
    setUser(user);
    setToken(token);
    setIsLogin(true);
  };
  const handleLogout = async () => {
    //* Logic Login
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ login: handleLogin, logout: handleLogout, isLogin, user, token }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
