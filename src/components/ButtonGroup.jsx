import Button from "./Button";

export default function ButtonGroup({handleRemoveAllItems, handleReset, handleMarkAllAsComplete, handleMarkAsIncomplete}) {
    
  
  return (
    <section className="button-group">
     <Button onClick={handleMarkAllAsComplete} buttonType='secondary' text={'Mark all as complete'}/>
     <Button onClick={handleMarkAsIncomplete} buttonType='secondary' text={'Mark all as incomplet'}/>
     <Button onClick={handleReset} buttonType='secondary' text={'Reset to initial'}/>
     <Button onClick={handleRemoveAllItems} buttonType='secondary' text={'Remove all items'}/>

    </section>
  );
}
