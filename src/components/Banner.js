import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { db } from '../firebase/firebase';
import Footer from './Footer';

export default function Banner() {
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
        <section className="h-full">
            <div className="grid xl:grid-cols-4 gap-16 font-poppins p-4 md:p-16 w-full mb-64 justify-items-center">
                <div className="col-span-2">
					<div className="flex-grow">
						<div className="flex-grow ">
							<h1 className="text-blue-500 font-bold text-4xl md:text-6xl text-center">Go Share</h1>
						</div>
                    	<p className="uppercase md:font-bold text-sm md:text-3xl text-left text-center pt-4 md: pb-16">Democratizing access to Tertiary education, one donation at a time.</p>
                    	<p className="uppercase md:font-bold text-sm md:text-2xl pb-2 pt-8 text-center">Sign up to be the first to know when we launch our pilot</p>
						<form
							className='newsletter-form is-revealing'
							onSubmit={handleSubmit}
						>
							<div className="grid grid-rows-2 md:flex gap-4 md:justify-center">
								<input
								className="py-4 text-sm text-gray-500 bg-white border border-gray-300 rounded-md shadow-none px-auto hover:border-yellow-300"
								type="email"
								name="email"
								placeholder="Your best email&hellip;"
								value={email}
								required
								onChange={(e) => setEmail(e.target.value)}
								/>
								<div className="flex space-x-4">
									<select
										className="py-4 text-sm text-gray-500 bg-white border border-gray-300 rounded-md shadow-none flex-shrink hover:border-yellow-300"
										name="role"
										value={role}
										onChange={(e) => setRole(e.target.value)}
									>
										<option defaultValue="Choose role" hidden>Choose role</option>
										<option>Student</option>
										<option>Donor</option>
									</select>
									<button
                                    className="text-white py-4 px-auto shadow-lg bg-blue-500 rounded-md font-bold hover:bg-yellow-300 flex-shrink w-full p-2"
                                    type="submit"
                                    style={{background: loader ? "#9CA3AF": "#3B82F6"}}
									>
										Early Access
                                	</button>
								</div>
							</div>
						</form>                    
                	</div>               
                </div>
                <div className="col-span-2">
                    <img className="h-full object-contain lg:object-cover" src={logo} alt="logo"/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}
