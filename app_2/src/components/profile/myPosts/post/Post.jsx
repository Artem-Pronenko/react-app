import React from 'react';
import HeaderPost from './headerPost/HeaderPost';
import FooterPost from './footerPost/FooterPost';
import c from './Post.module.sass';


const Post = ({date, text, imgUrl, like, comments, views, explain}) => {
	return (
		<div className={`${c.post}  ${c.post_profile}`}>

			<HeaderPost date={date} explain={explain}/>

			<div className={c.post_content}>
				<p className={c.post_text}>{text}</p>
				<div className={c.post_img}>
					<img src={imgUrl} alt="img"/>
				</div>
			</div>

			<FooterPost like={like} comments={comments} views={views}/>

		</div>
	)
};


export default Post;




