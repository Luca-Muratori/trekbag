import Counter from "./Counter";
import Logo from "./Logo";
import { useItemContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemStore";

export default function Header() {


  const items=useItemsStore(state=>state.items)
  return (
    <header>
      <Logo />
      <Counter numberPackedItem={items.filter((item)=>item.packed).length} totalItems={items.length}/>
    </header>
  );
}
