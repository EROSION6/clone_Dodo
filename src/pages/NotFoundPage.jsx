import React from "react";
import { Button } from "../UI/Button/Button";
import "../scss/NotFoundPage.scss";
import pizza from "../assets/pizza-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<section className='notFoundPage'>
			<h1>
				4<img src={pizza} alt='pizza' />4
			</h1>
			<p>
				<strong>
					File no<span>t found</span>
				</strong>
			</p>
			<p>
				The site configured at this address does <br />
				not contain the requested file.
			</p>
			<Button onClick={() => navigate("/")} variant='gray'>
				Назад
			</Button>
		</section>
	);
};

export default NotFoundPage;
