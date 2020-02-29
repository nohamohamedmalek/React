import React, { Component } from 'react';
import TodoItems from './component/TodoItems/TodoItems';
import AddItem from './component/AddItems/AddItems';
class App extends Component {
  state = {
     items : [
       {id:1 , name:'Noha', age:22},
       {id:2 , name:'Alyaa', age:23}, 
       {id:3 , name:'Aly', age:21}     
     ]
  } 
  deleteItem =(id) => {
   let items = this.state.items.filter(items =>{
     return items.id !==id
   })
   this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})

  }
  render() {
    return (
      <div className="App container">
     <h1 className="text-center">TO DO LIST </h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
       </div>
    );
  }
}

export default App;
