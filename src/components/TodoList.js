import {useState} from "react";

const TodoList = ({list, deleteItem}) => {

    const [edit, setEdit] = useState("");
    const [open, setOpen] = useState(false);
    const [saveId, setSaveId] = useState(0);

    const editItem = (itemId) => {
        itemId.preventDefault();
        setEdit(itemId.target.value);
    }

    const saveChanges = () => {
        if(edit !== "") {
            list.find(item => item.id === saveId).value = edit;
            setEdit("");
        }
        setOpen(false);

    }

    return (
        <div>

            <ul>
                {list ? list.map(item => {
                    return (
                        <div className="items" key={item.id}>
                            <li>{item.value}
                                <div className="itemsButtons">
                                    <button onClick={() => {
                                        open && item.id===saveId ? setOpen(false) : setOpen(true);
                                        setSaveId(item.id)}}>
                                        edit</button>
                                    <button onClick={() => deleteItem(item.id)}>delete</button>
                                </div>
                            </li>
                            {open && item.id===saveId && (
                                <div>
                                    <div className="edit">
                                        <input autoFocus={open} placeholder="Edit the do here" value={edit} type="text" onChange={editedItem => editItem(editedItem)}/>
                                        <button disabled={edit.trim() === ""} onClick={() => saveChanges()}>save changes</button>
                                        <button onClick={() => setOpen(false)}>close</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                }) : null
                }

            </ul>


        </div>

    )
}

export default TodoList;