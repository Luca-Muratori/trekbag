import { createContext, useEffect, useState } from "react";
import { initialItems } from '../lib/constants'

export const ItemsContext=createContext()

export default function ItemContextProvider({children}) {
  const itemsLocalStorage=JSON.parse(localStorage.getItem('items'))
  const [items, setItems] = useState(itemsLocalStorage || initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem=(id)=>{
    const newItems=items.filter((item)=>item.id!==id)
    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleReset = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleToogleItem=(id)=>{
    const newItems=items.map(item=>{
      if(item.id===id){
        return {...item, packed:!item.packed}
      }
      return item
    })
    setItems(newItems)
  }

  useEffect(()=>{
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleMarkAllAsComplete,
        handleMarkAsIncomplete,
        handleRemoveAllItems,
        handleReset,
        handleToogleItem
      }}
    
    >{children}</ItemsContext.Provider>
  )
}
