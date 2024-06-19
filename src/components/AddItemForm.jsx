import { useRef, useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit=(e) => {
    e.preventDefault();

    if (!itemText) {
      alert("item can't be empty");
      inputRef.current.focus()
      return;
    }
   
    onAddItem(itemText)
    setItemText('')
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Add an item:</h2>
      <input
        ref={inputRef}
        value={itemText}
        type="text"
        placeholder="insert an item"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <button className="btn">Add to list</button>
    </form>
  );
}
