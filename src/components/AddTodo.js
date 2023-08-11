const AddTodo = ({getInput, handleChange, input}) => {
    return (
        <div className="topSection">
            <input type="text" value={input} onChange={(e) =>
                handleChange(e)} onKeyDown={(e) => e.key=="Enter"? handleChange(e) : } placeholder="Add a new do"/>
            <button disabled={input.trim() === ""} onClick={getInput}>Add</button>
        </div>
    )
}

export default AddTodo;
