import { useState } from "react";
import { AddCategory, Giftgrid } from "./components";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const onAdd = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  // console.log(categories);
  return (
    <div>
      {/* titulo */}
      <h1>Gift-APP</h1>

      {/* input */}
      <AddCategory onNewCategory={onAdd} />
      {/* listas de tarjetas */}

      {/* <button onClick={onAdd}>Agregar Categoria</button> */}

      {categories.map((categorie) => (
        <Giftgrid key={categorie} category={categorie} />
      ))}

      {/* listItem */}
    </div>
  );
};

export default GiftExpertApp;
