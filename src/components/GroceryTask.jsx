
import PropTypes from "prop-types";
function GroceryTask({
  id,
  item,
  handleDeletefunc,
  isChecked,
  handleStrikefunc,
  handleEdit,
  editId,
  handleEditSave,
  setEdit,
  edit
  
}) {
  const onTaskChange = (e) => setEdit(e.target.value);

  return (
    <li className="flex justify-between pt-6" key={id}>
      <div
        className={`flex justify-center items-center gap-2 ${
          isChecked ? "line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleStrikefunc(id,isChecked)}
          className="mt-2"
        />
        {editId === id ? (
          <input
            type="text"
            className="border"
            value={edit}
            onChange={(e) => onTaskChange(e)}
          />
        ) : (
          <span className="text-xl font-bold">{item}</span>
        )}
      </div>
      {editId === id ? (
        <button
          className="text-white ml-2 px-2"
          onClick={() => handleEditSave(id)}
        >
          ✅
        </button>
      ) : (
        <button className="text-white ml-2 px-2" onClick={() => handleEdit(id,item)}>
          ✍
        </button>
      )}
      <button
        className="bg-black text-white px-2"
        onClick={() => handleDeletefunc(id)}
      >
        Delete
      </button>
    </li>
  );
}

GroceryTask.propTypes = {
  id :PropTypes.number,
  item:PropTypes.string,
  handleDeletefunc:PropTypes.func,
  isChecked:PropTypes.bool,
  handleStrikefunc:PropTypes.func,
  handleEdit:PropTypes.func,
  editId:PropTypes.number,
  setEditId:PropTypes.func,
  handleEditSave:PropTypes.func,
  setEdit:PropTypes.func,
  edit:PropTypes.string
}

export default GroceryTask;
