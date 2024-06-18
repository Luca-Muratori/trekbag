import { useState } from "react";
import { initialItems } from "../lib/constants";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  return (
    <ul>
      {items.map((item, index) => {
        return <Item text={item.name} key={index} />;
      })}
    </ul>
  );
}

function Item({ text, index }) {
  return (
    <>
      <li className="item">
        <label htmlFor={index}>
          <input id={index} type="checkbox" />
          {text}
        </label>
        <button>❌</button>
      </li>
    </>
  );
}
