import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import CardEveryDaySection from "../../components/CardEveryDaySection/CardEveryDaySection";
import CardSection from "../../components/CardSection/CardSection";

const Home = () => {
	return (
		<div className='home'>
			<Slider />
			<CardEveryDaySection />
			<CardSection />
		</div>
	);
};

export default Home;
