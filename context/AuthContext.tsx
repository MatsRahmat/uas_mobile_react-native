import { createContext } from "react";
import { InitState, stateSetterType } from "../App";

export type AuthContexType = {
  state: InitState,
  setter: stateSetterType 
}

export const AuthContext = createContext<AuthContexType>({});