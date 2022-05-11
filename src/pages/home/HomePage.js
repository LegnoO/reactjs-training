import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className='text-center'>
			<h1>Home Page</h1>
			<Link to='/login'>Login</Link>
		</div>
	)
}

export default HomePage