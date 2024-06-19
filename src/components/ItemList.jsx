

export default function ItemList({items}) {

  return (
    <ul>
      {items.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <>
      <li className="item">
        <label >
          <input id={item.id} type="checkbox" checked={item.packed}/>
          {item.name}
        </label>
        <button>❌</button>
      </li>
    </>
  );
}
