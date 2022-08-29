import React from "react";
import { BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";
import Topbar from '../dashboard/components/topbar/Topbar';


import './profile_page.css';

function ProfilePage () {

	return(
		<>
		<Topbar/>
		<div className="container">
			<div className="previous-page">
				<span>
					<BsArrowLeft />
				</span>
				<Link to='/dashboard' className="goBack">Go back</Link>
			</div>
			<div className="profile-header">
				<h5>Profile</h5>
			</div>
			<div className="profile-container">
				<div className ="profile-div">
					<div className="profile-content">
						<h5>First Name</h5>
						<p>first name</p>
					</div>
					<div className="profile-content">
						<h5>Last Name</h5>
						<p>last name</p>
					</div>
					<div className="profile-content">
						<h5>Phone number</h5>
						<p>phone number</p>
					</div>
					
					<div className="profile-content">
						<h5>Email</h5>
						<p>email</p>
					</div>
				</div>
			</div>
		</div>
		
		</>
	)

}

export default ProfilePage;