import { useEffect, useState } from 'react';
import './style.css';

export const UserList = ({ value, list }) => {
	const [ filteredList, setFilteredList ] = useState(list);

	useEffect(
		() => {
			setFilteredList(list);
		},
		[ list ]
	);

	useEffect(
		() => {
			setFilteredList(
				(list || [])
					.filter(({ name }) => (name || '').toLowerCase().includes((value || '').toLowerCase().trim()))
			);
		},
		[ value ]
	);

	if (!list) {
		return <div>Loading... </div>;
	}

	if (!(list || []).length) {
		return <div>There are no users</div>;
	}

    if(!(filteredList || []).length){
       return  <div>There are no users found by this search</div>;
    }

	return (
		<ol>
			{(filteredList || []).map((user) => (
				<li>
					<span className="name">{user.name}</span> {'@' + user.username}
				</li>
			))}
		</ol>
	);
};
