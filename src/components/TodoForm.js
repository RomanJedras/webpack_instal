import React from 'react';
import style from './Todoform.css';


class TodoForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange (event) {
		this.setState({value: event.target.value});
	}
	
	
	handleSubmit (event) {
		event.preventDefault();
		let inp = document.getElementById('todoInput');
		let val = inp.value;
		inp.value = '';
		this.props.handleSubmit(val);
		
	}
	
	render() {
		return (
			<div className={style.AppForm}>
				<form onSubmit={this.handleSubmit}>
					<input id="todoInput" type="text" name="add-todo" placeholder="What needs to be done?" value={this.state.value} onChange={this.handleChange}/>
					<button type="button" onClick={this.handleSubmit} className={style.AppBtn}>Add task</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;