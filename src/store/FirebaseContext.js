import { createContext, useContext } from "react";

export const FirebaseContext = createContext();

export function useFirebase() {
  return useContext(FirebaseContext);
}
