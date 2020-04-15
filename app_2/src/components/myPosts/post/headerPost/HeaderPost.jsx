import React from 'react';
import c from '../Post.module.sass';
import avatar from '../icon/avatar.jpg';


const HeaderPost = ({date, explain}) => {
	return (

		<div className={c.post_name}>
			<div className={c.avatar}>
				<img src={avatar} alt="avatar"/>
			</div>
			<div className={c.post_author}>
				<div>
					<h5>
						<a href={''} className={c.author}>Artem Pronenko</a>
						<span className={c.post_explain}>{explain}</span>
					</h5>
					<button className={c.menu}>
					</button>
				</div>
				<a href={''}>
					<span className={c.post_date}>{date}</span>
				</a>
			</div>
		</div>
	)
};


export default HeaderPost;




