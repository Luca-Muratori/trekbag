import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../context/ItemContextProvider";
import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemStore";

export default function ButtonGroup() {

  const markAllAsComplete=useItemsStore(state=>state.markAllAsComplete)
  const markAllAsIncomplete=useItemsStore(state=>state.markAllAsIncomplete)
  const resetToInitial=useItemsStore(state=>state.resetToInitial)
  const removeAllItems=useItemsStore(state=>state.removeAllItems)
    
  return (
    <section className="button-group">
     <Button onClick={markAllAsComplete} buttonType='secondary' text={'Mark all as complete'}/>
     <Button onClick={markAllAsIncomplete} buttonType='secondary' text={'Mark all as incomplete'}/>
     <Button onClick={resetToInitial} buttonType='secondary' text={'Reset to initial'}/>
     <Button onClick={removeAllItems} buttonType='secondary' text={'Remove all items'}/>

    </section>
  );
}
