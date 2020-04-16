import React from 'react';
import c from '../DialogContent.module.sass';


const DialogMessage = ({avatar, textMessage, author}) => {
	return (

		<div className={c.message_cards}>
			<div className={c.message_card}>
				<div className={c.card_content}>

					<div className={c.card_avatar}>
						<img src={avatar} alt="avatar"/>
					</div>

					<div className={c.card_wrap}>
						<div className={c.card_info}>
							<h5 className={c.author_name}>{author}</h5>
							<span className={c.time}>18:46</span>
						</div>
						<span className={c.card_preview}>{textMessage}</span>
					</div>

				</div>
			</div>
		</div>

	)

};


export default DialogMessage;



