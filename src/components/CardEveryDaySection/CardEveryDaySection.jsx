import React from "react";
import "./CardEveryDaySection.scss";
import { CardEveryDay } from "./CardEveryDay/CardEveryDay";
import { everyDayCard } from "../../data/EveryDayCard";

const CardEveryDaySection = () => {
	return (
		<section className='cardEveryDaySection'>
			<h3>Часто заказывают</h3>
			<div className='cardEveryDaySection__grid'>
				{everyDayCard.map(card => (
					<CardEveryDay key={card.title} {...card} />
				))}
			</div>
		</section>
	);
};

export default CardEveryDaySection;
