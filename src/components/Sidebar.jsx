import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleReset,
  handleMarkAllAsComplete,
  handleMarkAsIncomplete
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleReset={handleReset}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAsIncomplete={handleMarkAsIncomplete}
      />
    </div>
  );
}
