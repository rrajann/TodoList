import { useState } from 'react'

export default function Form({ onSubmit}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;
        onSubmit(newItem);
        setNewItem("");
      }

    return (
        <form onSubmit={handleSubmit} className="Todo">
        <div className = "form-row"> 
        <label htmlFor="item"> New Item</label>
        <p>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
        </p>
        <button className="btn">Add</button>
        </div>
      </form>
    )

}