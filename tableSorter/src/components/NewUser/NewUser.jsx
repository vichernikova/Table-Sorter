// import { useState} from 'react';

// const NewUser = ({users, setUsers}) => {
	
// 	const [name, setName] = useState('');
// 	const [userName, setUserName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [address, setAddress] = useState('');	
	
// 	const addNewUser = (e) => {
// 		e.preventDefault();
// 		const addressParts = address.split(',').map(part => part.trim());
// 		const newUser = {
// 		  id: 1,
// 		  name: name,
// 		  userName: userName,
// 		  email: email,
// 		  address: {
// 			street: addressParts[0],
// 			city: addressParts[1],
// 			zipcode: addressParts[2]
// 		}
// 		};
// 		const updatedUsers = [newUser, ...users.map(user => ({ ...user, id: user.id + 1 }))];
// 		setUsers(updatedUsers);
// 		setName('');
// 		setUserName('');
// 		setEmail('');
// 		setAddress('');
// 	  };
	
	
// 	return (
// 		<>
// 				<div>
// 					<input 
// 						className="input"
// 						type="text" 
// 						name="name" 
// 						placeholder="Add name..." 
// 						onChange={e => 
// 							setName(e.target.value)} 
// 					/>
// 					<input 
// 						className="input"
// 						type="text" 
// 						name="userName" 
// 						placeholder="Add userName..." 
// 						onChange={e => 
// 							setUserName(e.target.value)} 
// 					/>
// 					<input 
// 						className="input"
// 						type="email" 
// 						name="email" 
// 						placeholder="Add email..." 
// 						onChange={e => 
// 							setEmail(e.target.value)} 
// 					/>
// 					<input 
// 						className="input"
// 						type="text" 
// 						name="address" 
// 						placeholder="Add address..." 
// 						onChange={e => 
// 							setAddress(e.target.value)} 
// 					/>
// 					<button className="submitBtn" onClick={addNewUser}>Add</button>
// 				</div>
// 		</>
// 	)
// }
	
// export default NewUser;
