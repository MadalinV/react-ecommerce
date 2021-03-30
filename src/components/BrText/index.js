import React from "react";
import { BrContainer } from "./BrTextElements";

const BrText = ({ text }) => {
	return (
		<BrContainer>
			<span></span>
			<h2>{text}</h2>
		</BrContainer>
	);
};

export default BrText;
