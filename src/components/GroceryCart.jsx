import React, { useState } from "react";
import { toast } from "react-toastify";
import "../index.css";
function GroceryCart() {
  const [GroceryInput, setGroceryInput] = useState("");
  const [GroceryList, setGroceryList] = useState([]);

  //Add Items
  const handleAddItem = () => {
    console.log("button clicked");
    if (GroceryInput.trim() === "") {
      console.log("empty");
      toast.error("Please insert grocery item", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    setGroceryList([...GroceryList, { GroceryItem: GroceryInput }]);
    setGroceryInput("");
    toast.success("Item Added To The List", {
      position: "top-center",
      theme: "colored",
    });
  };

  //   delete items
  const handleDelete = (idx) => {
    console.log("deleted");
    setGroceryList(GroceryList.filter((item, index) => idx != index));
    toast.success("Item Deleted", {
      position: "top-center",
    });
  };

  //handle strike
  const handleStrike = (idx) => {
    console.log("checked");
    setGroceryList(
      GroceryList.map((item, index) => {
        if (idx === index) {
          return { ...item, isStriked: !item.isStriked };
        }
        return item;
      })
    );
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center pt-40 bg-slate-100">
      <div className=" p-10 bg-white">
        <h1 className="text-black text-2xl font-bold mb-4 text-center">
          Grocery Bud
        </h1>
        <div>
          <input
            type="text"
            value={GroceryInput}
            onChange={(e) => setGroceryInput(e.target.value)}
            className="border p-2 bg-slate-100 w-80"
          />
          <button className="p-2 bg-blue-300" onClick={handleAddItem}>
            Add item
          </button>
        </div>
        <ul>
          {GroceryList.map((item, idx) => (
            <li className="flex justify-between pt-6 " key={idx}>
              <div
                className={`flex justify-center items-center gap-2 ${
                  item.isStriked ? "striked" : ""
                }`}
              >
                <input type="checkbox" onClick={() => handleStrike(idx)} />
                {item.GroceryItem}
              </div>
              <button
                className="bg-black text-white px-2"
                onClick={() => handleDelete(idx)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </div>
  );
}

export default GroceryCart;
