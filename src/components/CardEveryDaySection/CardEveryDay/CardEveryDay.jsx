import "./CardEveryDay.scss"

export const CardEveryDay = ({ title, imgUrls, price }) => {
	return (
		<article className='cardEveryDay'>
			<div className='cardEveryDay__left'>
				<img src={imgUrls} alt='img' />
			</div>
			<div className='cardEveryDay__right'>
				<h2>{title}</h2>
				<b>{price} ₽</b>
			</div>
		</article>
	)
}
