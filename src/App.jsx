import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
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
    <>
      <BackgroundHeading />
      <main>
        <Header  totalItems={items.length} numberPackedItem={items.filter(item=>item.packed).length}/>
        <ItemList items={items} handleDeleteItem={handleDeleteItem} handleToogleItem={handleToogleItem} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleReset={handleReset}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAsIncomplete={handleMarkAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
