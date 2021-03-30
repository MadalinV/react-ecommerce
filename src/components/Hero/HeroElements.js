import styled from "styled-components";

export const HeroContainer = styled.div`
	height: calc(100vh - 80px);
	margin-top: 80px;
	background-color: gray;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 425px) {
		flex-direction: column;
	}
`;

export const HomeData = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 425px) {
		order: 2;
		width: 100%;
	}
`;

export const Text = styled.h2`
	font-size: 2.5rem;
	padding: 1rem;
	margin-bottom: 2rem;
	text-align: center;
`;
export const Button = styled.div``;

export const HomeImg = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 70%;
		width: 70%;
	}

	@media screen and (max-width: 425px) {
		order: 1;
		width: 100%;
		height: 50%;
	}
`;
