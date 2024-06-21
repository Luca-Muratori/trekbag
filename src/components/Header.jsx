import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({totalItems, numberPackedItem}) {
  return (
    <header>
      <Logo />
      <Counter numberPackedItem={numberPackedItem} totalItems={totalItems}/>
    </header>
  );
}
