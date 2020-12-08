import { useEffect, useState } from 'react';
import './App.css';
import { UserList } from './components/UserList';
import UserListModel from './models/users';

const App = () => {
	const [ list, setList ] = useState(null);
  const [ value, setValue ] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((json) => {
			setList((json || []).map(UserListModel));
		});
	}, []);

	return (
		<div className="App">
			<div className="title">Users list</div>
      <input {...{ placeholder: 'Search by user name...', value, onChange: (e) => setValue(e.target.value) }} />
      <UserList { ...{ value, list }}/>
		</div>
	);
};

export default App;