import "./CardSection.scss";
import { CardItems } from "./CardItems/CardItems";
import { useSelector } from "react-redux";

const CardSection = () => {
	const { pizza } = useSelector(state => state.pizza);

	return (
		<section className='cardSection'>
			<h2>Пиццы</h2>
			<div className='cardSection__container'>
				{pizza.map(item => (
					<CardItems {...item} key={item.id} />
				))}
			</div>
		</section>
	);
};

export default CardSection;
