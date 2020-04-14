import React from 'react';
import './Profile.sass';
import avatar from './avatar.jpg'
import MyPosts from "../myPosts/MyPosts";

function Profile() {
	return (
		<div className={'content'}>

			<div className="column_content">
				<div className={'column_profile'}>
					<div className={'avatar'}>
						<img src={avatar} alt="avatar"/>
					</div>
				</div>

				<div className={'column_info'}>
					<div className={'profile_info'}>name and profile info</div>
					<MyPosts/>

				</div>
			</div>

		</div>
	)
}


export default Profile;




