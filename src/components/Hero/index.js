import React from "react";
import { HeroContainer, HomeData, HomeImg, Text } from "./HeroElements";
import { Button } from "../button";

const Hero = () => {
	return (
		<HeroContainer>
			<HomeData>
				<Text>Explore the new collections of sneakers</Text>
				<Button
					color="primary"
					to="newin"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={-80}
				>
					Explore now
				</Button>
			</HomeData>
			<HomeImg>
				<img src="heroimg.png" alt="" />
			</HomeImg>
		</HeroContainer>
	);
};

export default Hero;
