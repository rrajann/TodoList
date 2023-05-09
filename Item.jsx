export default function Item({title, id, completed, toggleTodo, deleteTodo}) {
    return (
    <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}></input>
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn-delete">Delete</button>
            </li>
    )
}