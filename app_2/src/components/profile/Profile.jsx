import React from 'react';
import './Profile.sass';
import avatar from './avatar.jpg'
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {
	return (
		<div className={'content'}>

			<div className="column_content">
				<div className={'column_profile'}>
					<div className={'avatar'}>
						<img src={avatar} alt="avatar"/>
						<div className={'avatar_buttons'}>
							<button className={'avatar_btn avatar_edit'}>Измѣнить</button>
							<button className={'avatar_btn avatar_settings'}>...</button>
						</div>
					</div>
				</div>

				<div className={'column_info'}>
					<div className={'profile_info'}>name and profile info</div>

					<MyPostsContainer store={props.store}/>

				</div>
			</div>

		</div>
	)
};


export default Profile;




