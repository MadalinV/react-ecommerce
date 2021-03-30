import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import Nav from "./Nav";

import logo from "../../assets/images/logo.png";
import useStyles from "./styles";
import SideBar from "./Sidebar";

const Navbar = ({ totalItems }) => {
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles();
	const location = useLocation();
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography
						variant="h6"
						className={classes.title}
						color="inherit"
						component={Link}
						to="/"
					>
						<img
							src={logo}
							alt="commerce"
							height="25px"
							className={classes.image}
						/>
						E-Commerce Website
					</Typography>
					{location.pathname === "/" && (
						<div>
							<Nav toggle={toggle} />
							<SideBar isOpen={isOpen} toggle={toggle} />
						</div>
					)}

					<div className={classes.grow} />
					{location.pathname === "/" && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to="/cart"
								aria-label="Show cart items"
								color="inherit"
							>
								<Badge
									badgeContent={totalItems}
									color="secondary"
								>
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
