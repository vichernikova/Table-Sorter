import { useState, useEffect } from 'react'
import UserData from './UserData';
import Loading from './Loading';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
const apiData = "https://jsonplaceholder.typicode.com/users";


export const Table = () => {
	
	// USERS
	const [users, setUsers] = useState([]);
	
	// LOADER
	const [loading, setLoading] = useState(false);
	
	
	// INPUT FIELDS
	const [name, setName] = useState('');
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');	
	
	// SORTING
	const [sortByName, setSortByName] = useState('');
	const [sortByUserName, setSortByUserName] = useState('');
	const [sortByEmail, setSortByEmail] = useState('');
  

  
	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch(apiData);
			const data = await response.json();
			setLoading(false);
			setUsers(data);
		};
		setLoading(true);
		fetchUsers();
	}, []);
	
	
	// ADD NEWUSER
	const addNewUser = (e) => {
		e.preventDefault();
		const addressParts = address.split(',').map(part => part.trim());
		const newUser = {
			id: 1,
			name: name,
			username: username,
			email: email,
			address: {
				street: addressParts[0],
				city: addressParts[1],
				zipcode: addressParts[2]
			}
		};
		
		const updatedUsers = [newUser,...users.map(user => ({ ...user, id: user.id + 1 }))];
		setUsers(updatedUsers);

		// Clear the input fields
		setName('');
		setUserName('');
		setEmail('');
		setAddress('');
	};
			
	// Sort users data based on sortByName state
	if (sortByName === 'asc') {
		users.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortByName === 'desc') {
		users.sort((a, b) => b.name.localeCompare(a.name));
	}
	
	// Sort users data based on sortByUserName state
	if (sortByUserName === 'asc') {
		users.sort((a, b) => a.username.localeCompare(b.username));
	} else if (sortByUserName === 'desc') {
		users.sort((a, b) => b.username.localeCompare(a.username));
	}
	
	// Sort users data based on sortByEmail state
	if (sortByEmail === 'asc') {
		users.sort((a, b) => a.email.localeCompare(b.email));
	} else if (sortByEmail === 'desc') {
		users.sort((a, b) => b.email.localeCompare(a.email));
	}
		
		
	
	return (
		<>
			<div className="container">
				<div>
					<input 
						className="input"
						type="text" 
						value={name}
						placeholder="Add name..." 
						onChange={(e) => 
							setName(e.target.value)} 
					/>
					<input 
						className="input"
						type="text" 
						value={username}
						placeholder="Add userName..." 
						onChange={e => 
							setUserName(e.target.value)} 
					/>
					<input 
						className="input"
						type="email" 
						value={email}
						placeholder="Add email..." 
						onChange={e => 
							setEmail(e.target.value)} 
					/>
					<input 
						className="input"
						type="text" 
						value={address}
						placeholder="Add address..." 
						onChange={e => 
							setAddress(e.target.value)} 
					/>
					<button className="submitBtn" onClick={addNewUser}>Add</button>
				</div>
     			{loading ? (
					<Loading /> 
				) : (
					(<table className="table">
						<thead className="tableHead">
							<tr>
								<th>№</th>
								<th>
									<button className="title">Name</button>
									<button className="arrowBtn" onClick={() => setSortByName('asc')}><IoIosArrowRoundDown /></button>
									<button className="arrowBtn" onClick={() => setSortByName('desc')}><IoIosArrowRoundUp /></button>
								</th>
								<th>
									<button className="title">userName</button>
									<button className="arrowBtn" onClick={() => setSortByUserName('asc')}><IoIosArrowRoundDown /></button>
									<button className="arrowBtn" onClick={() => setSortByUserName('desc')}><IoIosArrowRoundUp /></button>
								</th>
								<th>
									<button className="title">Email</button>
									<button className="arrowBtn" onClick={() => setSortByEmail('asc')}><IoIosArrowRoundDown /></button>
									<button className="arrowBtn" onClick={() => setSortByEmail('desc')}><IoIosArrowRoundUp /></button>
								</th>
								<th>
									<button className="title">Address</button>
								</th>
							</tr>
						</thead>
						<tbody>
								<UserData users={users} />
						</tbody>
					</table>)
				)}
   			 </div>
		</>
	)
}

export default Table;
