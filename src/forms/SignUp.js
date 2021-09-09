import React, { useState } from 'react'
import { db } from '../firebase/firebase';

const SignUp = () => {
	const[email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [loader, setLoader] = useState(false);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);
		db.collection('contacts').add({
			email: email,
			role: role,
		})
			.then(() => {
				alert("Email has been saved 👍");
				// Set the loader to false after adding the data
				setLoader(false);
			})
			.catch((error) => {
				alert(error.message);
				// Set the loader to false after adding the data
				setLoader(false);
			});
		setEmail("");
		setRole("");
	}
	return (
		<form
			className='newsletter-form is-revealing'
			onSubmit={handleSubmit}
		>
			<div className="flex flex-wrap space-x-4 justify-center">
				<input
					className="w-auto py-4 text-sm text-gray-500 bg-white border border-gray-300 rounded-md shadow-none flex-grow hover:border-yellow-300"
					type="email"
					name="email"
					placeholder="Your best email&hellip;"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<select
					className="w-auto py-4 text-sm text-gray-500 bg-white border border-gray-300 rounded-md shadow-none flex-shrink-0 hover:border-yellow-300 flex-grow"
					name="role"
					placeholder="Your best email&hellip;"
					value={role}
					onChange={(e) => setRole(e.target.value)}
				>
					<option value="" selected disabled hidden>Choose role</option>
					<option value="Student">Student</option>
					<option value="Donor">Donor</option>
				</select>
				<div className="control flex-shrink-0">
					<button
						className="text-white py-4 px-8 shadow-lg bg-blue-500 rounded-md font-bold hover:bg-yellow-300"
						type="submit"
						style={{background: loader ? "#9CA3AF": "#3B82F6"}}
					>
						Early Access
					</button>
				</div>
			</div>
		</form>
	)
}

export default SignUp;