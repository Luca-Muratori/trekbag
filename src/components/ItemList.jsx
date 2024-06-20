import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToogleItem,
}) {
  return (
    <ul className="item-list">
      {
        items.length === 0 && <EmptyView/>
      }
      {items.map((item, index) => {
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
