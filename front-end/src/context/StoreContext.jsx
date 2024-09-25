import { createContext} from "react";
import { food_list } from "../assets/assets";

// create and export the context:
export const StoreContext = createContext(null);
// create and export StoreContextProvider
export const StoreContextProvider = (props) => {

const contextValue={
  food_list
}
  return(
    <StoreContext.Provider value={contextValue}>
    {props.children}
  </StoreContext.Provider>
  )
 
};
