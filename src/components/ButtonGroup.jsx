import { texts } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
    
  return (
    <section className="button-group">
      {texts.map((text)=>{
        return <Button key={text} type='secondary' text={text}/>
      })}
    </section>
  );
}
