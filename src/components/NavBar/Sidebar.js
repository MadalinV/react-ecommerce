import React from "react";
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarMenu,
	SideBarLink,
	SideBarBtnWrap,
	SideBarRoute,
} from "./SidebarElements.js";

function SideBar({ isOpen, toggle }) {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink to="newin" onClick={toggle}>
						NewIn
					</SideBarLink>
					<SideBarLink to="man" onClick={toggle}>
						Man
					</SideBarLink>
					<SideBarLink to="woman" onClick={toggle}>
						Woman
					</SideBarLink>
				</SideBarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	);
}

export default SideBar;
