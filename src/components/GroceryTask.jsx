
function GroceryTask({
  id,
  item,
  handleDeletefunc,
  isChecked,
  handleStrikefunc,
}) {

  const onTaskChange = (e) => setTask(e.target.value)

  return (
    <li className="flex justify-between pt-6" key={id}>
      <div
        className={`flex justify-center items-center gap-2 ${
          isChecked ? "line-through" : ""
        }`}

      >
        <input type="checkbox"
        defaultChecked={isChecked}
          onChange={() => handleStrikefunc(id)} className="mt-2"/>
        <span className="text-xl font-bold">{item}</span>
      </div>
      {/* <button className="text-white ml-2 px-2" onClick={() => setIsEdited(!isEdited)}>
        {isEdited ? "✅" : "✍"}
      </button> */}
      <button className="bg-black text-white px-2" onClick={() => handleDeletefunc(id)}>
        Delete
      </button>
    </li>
  );
}

export default GroceryTask;
