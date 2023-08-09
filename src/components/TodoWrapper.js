import {useState} from "react";
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoWrapper = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [id, setId] = useState(0);

    const handleChange = (item) => {
        setInput(item.target.value);
    }

    const addTodo = (e) => {
        if(input.trim() !== "") {
            for(let i=0;i<list.length;i++){
                list[i].id = i;
                setId(list.length+1);
            }
            let newList = [...list,
                {id: id, value: input}];
            setId(id+1);
            setList(newList);
            setInput("");
        }
    }

    const deleteItem = (itemId) => {
        let newList = list.filter(item => item.id!==itemId);
        setList(newList);
        for(let i=0;i<list.length;i++){
            list[i].id = i;
            setId(list.length+1);
        }
    }

    return (
        <div className="container">
            <AddTodo getInput={addTodo} handleChange={handleChange} input={input}/>
            <TodoList list={list} deleteItem={deleteItem} />
        </div>
    )
}

export default TodoWrapper;