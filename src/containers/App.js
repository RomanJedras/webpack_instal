import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/Todolist';
import TodoForm from '../components/Todoform';

class App extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			data: [{
				id: 1,
				text: 'clean room'
			}, {
				id: 2,
				text: 'wash the dishes'
			}, {
				id: 3,
				text: 'feed my cat'
			}]
		};
	}
	
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	
	render() {
		return (
			<div className={style.TodoApp, 'container'}>
				<div className={'row'}>
					<div className={'col-xs-12 col-md-12'}>
						<Title title="ToDoList App" length={this.state.data.length}/>
						<TodoForm handleSubmit={this.addTodo.bind(this)}/>
						<ul className={style.Todo}>
							<TodoList items={this.state.data} remove={this.removeTodo.bind(this)}/>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;