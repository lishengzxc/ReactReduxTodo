import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            console.log('add todo', text)
          }/>
        <TodoList
          todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
          }/>
        <Footer
          filter='SHOW_ALL'
          onFilterChange={filter =>
            console.log('filter change', filter)
          }/>
      </div>
    )
  }
}
//console.log(ReactDOM);
ReactDOM.render(<App />, document.getElementById('app'));