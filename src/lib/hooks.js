import { useContext } from "react";
import { ItemsContext } from "../context/ItemContextProvider";

export function useItemContext(){
   const context = useContext(ItemsContext)
   if(!context){
    throw new Error(
        'useItemContext must be used in a useContext provider'
    )
   }
   return context
}