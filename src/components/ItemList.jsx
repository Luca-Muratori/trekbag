import ReactSelect from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";

const sortingOptions = [
  { label: "sort by default", value: "default" },
  { label: "sort by packed", value: "packed" },
  { label: "sort by unpacked", value: "unpacked" },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToogleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  
  const sortedItems = useMemo(()=>[...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    } else if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  }), [items, sortBy])

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          {" "}
          <ReactSelect
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />{" "}
        </section>
      ) : null}

      {sortedItems.map((item, index) => {
        return (
          <Item
            item={item}
            key={index}
            onDeleteItem={handleDeleteItem}
            onToogleItem={handleToogleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToogleItem }) {
  return (
    <>
      <li className="item">
        <label>
          <input
            onChange={() => onToogleItem(item.id)}
            id={item.id}
            type="checkbox"
            checked={item.packed}
          />
          {item.name}
        </label>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}
