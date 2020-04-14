import React from 'react';

function Profile() {
	return (
		<div className={'content'}>
			<div>
				<img
					src="data:image/jpeg;base64,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"
					alt=""/>
			</div>
			<div>
				ava + description
			</div>
			<div>
				my posts
				<div>
					new posts
				</div>
				<div>
					posts 1
				</div>
				<div>
					posts 2
				</div>
			</div>
		</div>
	)
}


export default Profile;



