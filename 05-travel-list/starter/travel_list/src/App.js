import { useState } from "react";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackageList } from "./PackageList";

function App() {
  let [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, isPacked: !item.isPacked } : item;
      })
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("are you sure? ,for clear the list");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
