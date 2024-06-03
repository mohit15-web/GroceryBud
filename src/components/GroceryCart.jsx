import  { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GroceryTask from "./GroceryTask";
function GroceryCart() {
  const [GroceryInput, setGroceryInput] = useState("");
  const [GroceryList, setGroceryList] = useState([]);
  const[editId  , setEditId] = useState(null)
  const[edit,setEdit] = useState("")
  const handleEdit = (id,item) => {
    setEditId(id)
    setEdit(item)
  }
  const handleEditSave  = (index) => {
    let editedArr = GroceryList.map((item,id) => id === index ? {GroceryItem:edit,isChecked:false} : item )
    setGroceryList(editedArr)
    toast.success("Grocery Updated", {
      position: "top-center",
      theme: "colored",
    });
    setEditId()
    setEdit("")
  }
  useEffect(() => {
    const storedArr = localStorage.getItem('GroceryList')
    if(storedArr){
      setGroceryList(JSON.parse(storedArr))
    }
  },[])

    useEffect(() => {
      localStorage.setItem('GroceryList',JSON.stringify(GroceryList))
    },[GroceryList])

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

    setGroceryList([...GroceryList, { GroceryItem: GroceryInput,isChecked:false,  }]);
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
  const handleStrike = (idx,isChecked) => {
    const newFilteredArr = GroceryList.map((item,index) => {
      if (index === idx) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    setGroceryList(newFilteredArr);
   if(!isChecked){
    toast.success("Item checked", {
      position: "top-center",
      theme: "colored",
    });
   }
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
            <GroceryTask
            key={idx}
            id={idx}
            item ={item.GroceryItem}
            handleDeletefunc={handleDelete}
            handleStrikefunc={handleStrike}
            isChecked={item.isChecked}
            GroceryList={GroceryList}
            editId={editId}
            setEditId={setEditId}
            handleEdit={handleEdit}
            handleEditSave={handleEditSave}
            setEdit={setEdit}
            edit={edit}
            />
          ))}
        </ul>
      </div>

      <div></div>
    </div>
  );
}

export default GroceryCart;
