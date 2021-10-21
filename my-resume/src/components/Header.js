
import React from "react"
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header p-5">
			<navbar>
				<ul className="nav px-5">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/'>Projects</Link></li>
					<li><a href='/images/resume-test.pdf' target="_BLANK">Resume</a></li>
				</ul>
			</navbar>
		</header>
	)
}


export default Header