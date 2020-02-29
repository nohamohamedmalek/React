import React from 'react'
import './TodoItems.css'
const TodoItem = (props) => {
    const {items , deleteItem}= props;
    let length = items.length ;
    const ListItem = length ? (
        items.map(item =>{
            return(
              <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="icon" onClick={() => deleteItem(item.id)}>&times;</span>

               </div>
            );
         })
    )  : (
        <p> There is no items to show</p>
    )
    return (
        <div className="ListItems">
            <div>
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
        </div>
       { ListItem}
        </div>
    )
}
export default TodoItem;