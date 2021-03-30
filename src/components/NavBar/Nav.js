import React from "react";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavbarContainer,
	MobileIcon,
	NavLinks,
	NavMenu,
	NavItem,
} from "./NavElements.js";
import { animateScroll as scroll, Link } from "react-scroll";

function Nav2({ toggle }) {
	

	return (
		<>
			<Nav>
				<NavbarContainer>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="newin"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								NewIn
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="man"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Man
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="woman"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Woman
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
}

export default Nav2;
