import minus from "../../../../assets/minus-svgrepo-com.svg";
import plus from "../../../../assets/plus-large-svgrepo-com.svg";
import "./Counter.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, decrementPizza } from "../../../../store/sliceCart";

export const Counter = ({ id }) => {
	const counter = useSelector(state =>
		state.cart.cart.find(c => c.id === id),
	);
	const dispatch = useDispatch();

	const totalCount = counter ? counter.count : 0;

	const increment = () => {
		dispatch(
			addPizza({
				id,
			}),
		);
	};

	const decrement = () => {
		dispatch(decrementPizza(id));
	};

	return (
		<div className='counter'>
			<button onClick={decrement}>
				<img width={30} height={30} src={minus} alt='minus' />
			</button>
			<b>{totalCount}</b>
			<button onClick={increment}>
				<img width={30} height={30} src={plus} alt='plus' />
			</button>
		</div>
	);
};
