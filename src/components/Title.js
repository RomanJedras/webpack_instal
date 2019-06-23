import React from 'react';
import style from './Title.css';


const Title = props => {
	return(
		<div>
			<h1 className={style.AppTitle}>{props.title}</h1>
			<p className={style.NoTasks, style.AppNumber}>Number of Tasks: {props.length}</p>
		</div>
	)
}
export default Title;