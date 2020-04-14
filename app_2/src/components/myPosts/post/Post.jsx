import React from 'react';
import c from './Post.module.sass';
import avatar from './icon/avatar.jpg';
import postImg from './postImg.jpg';

function Post() {
	return (
		<div className={`${c.post}  ${c.post_profile}`}>


			<div className={c.post_name}>
				<div className={c.avatar}>
					<img src={avatar} alt="avatar"/>
				</div>
				<div className={c.post_author}>
					<h5>
						<a href={''} className={c.author}>Artem Pronenko</a>
						<button className={c.menu}>
						</button>
					</h5>
					<a href={''}>
						<span className={c.post_date}>17 iюн. 2019</span>
					</a>
				</div>
			</div>
			<div className={c.post_content}>
				<p className={c.post_text}>
					Действительно годный эвент.
					трёхдневная конференция от WebDev Summit окончена, было действительно круто. очень много полезной
					информации, от профессионалов, очень плотная подача. было очень интересно и круто. Попытаюсь попасть к
					вам на курсы. Жду следующего ивента. советую всем.#webdevsummit #webdevsummit2019
				</p>
				<div className={c.post_img}>
					<img src={postImg} alt="img"/>
				</div>
			</div>
			<div className={c.act}>
				<div className={c.act_buttons}>
					<div className={`${c.act_button} ${c.button_like}`}>
						<button className={c.like}>
						</button>
						<strong className={`${c.counter} ${c.counter_like}`}>1</strong>
					</div>
					<div className={`${c.act_button} ${c.button_comments}`}>
						<button className={c.comments}>
						</button>
						<strong className={`${c.counter} ${c.counter_comments}`}>2</strong>
					</div>
					<div className={`${c.act_button} ${c.button_share}`}>
						<button className={c.share}>
						</button>
					</div>
				</div>
				<div className={c.views}>
					68
				</div>

			</div>


		</div>
	)
}


export default Post;




