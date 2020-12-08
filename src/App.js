import { useEffect, useState } from 'react';
import './App.css';
import UserListModel from './models/users';

const App = () => {
	const [ list, setList ] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((json) => {
			setList((json || []).map(UserListModel));
		});
	}, []);

	return (
		<div className="App">
			<div className="title">Users list</div>
		</div>
	);
};

export default App;