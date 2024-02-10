import { useDispatch } from 'react-redux'
import cross from '../../../assets/carts.svg'
import { removePizza } from '../../../store/sliceCart'
import './CardCartSection.scss'
import { Counter } from './Counter/Counter'

export const CardCartSection = ({ title, price, imagesUrl, id }) => {
	const dispatch = useDispatch()

	return (
		<article className='cardCartSection'>
			<div className='cardCartSection__title'>
				<img
					className='cardCartSection__title__img'
					src={imagesUrl}
					alt={title}
				/>
				<div className='cardCartSection__title__info'>
					<h3>{title}</h3>
					<Counter id={id} />
				</div>
			</div>
			<div className='cardCartSection__info'>
				<b>{price} ₽</b>
				<button onClick={() => dispatch(removePizza(id))}>
					<img src={cross} alt='cross' />
				</button>
			</div>
		</article>
	)
}

//

// cardCartSection__info__price
