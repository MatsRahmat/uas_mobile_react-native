import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  root: {
    fontFamily: "sans",
  },
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 700,
  },
  textCenter: {
    textAlign: "center",
  },
  body: {
    fontSize: 14,
    fontWeight: 500,
  },
  semiBold: {
    fontWeight: 600
  },
  input: {
    padding: 7,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000"
  },
  border: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 6
  },

  button: {
    alignItems: "center",
    width: "100%",
    padding: 12,
  },

  // COLORS

  bgBlue: {
    backgroundColor: "#544EB0"
  },
  bgOrange: {
    backgroundColor: "#ff8904"
  },
  bgSky: {
    backgroundColor: "#00bcff"
  },
  
});