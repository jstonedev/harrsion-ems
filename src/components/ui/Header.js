import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../../assets/img/header-logo-new.png";

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbar: {
		minHeight: "120px",
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3.5em",
	},
	logo: {
		height: "8.5em",
		marginLeft: "-7px",
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
		paddingRight: "10px",
	},
	tab: {
		...theme.typography.tab,
		marginLeft: "25px",
		minWidth: 10,
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
		},
	},
	button: {
		borderRadius: "50px",
		marginLeft: "30px",
		marginRight: "25px",
		fontFamily: "Pacifico",
		fontSize: "1rem",
	},
	menu: {
		backgroundColor: theme.palette.common.red,
		color: "white",
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			cursor: "pointer",
			opacity: 1,
		},
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpen(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpen(false);
	};

	const menuOptions = [
		{ name: "Training", link: "/training" },
		{ name: "EMS Courses", link: "/ems-courses" },
		{ name: "AHA Courses", link: "/aha-courses" },
		{ name: "Course Registration", link: "/course-registration" },
	];

	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) {
					setValue(0);
				}
				break;
			case "/about-hems":
				if (value !== 1) {
					setValue(1);
				}
				break;
			case "/operations":
				if (value !== 2) {
					setValue(2);
				}
				break;
			case "/support-hems":
				if (value !== 3) {
					setValue(3);
				}
				break;
			case "/news-events":
				if (value !== 4) {
					setValue(4);
				}
				break;
			case "/training":
				if (value !== 5) {
					setValue(5);
					setSelectedIndex(0);
				}
				break;
			case "/ems-courses":
				if (value !== 5) {
					setValue(5);
					setSelectedIndex(1);
				}
				break;
			case "/aha-courses":
				if (value !== 5) {
					setValue(5);
					setSelectedIndex(2);
				}
				break;
			case "/course-registration":
				if (value !== 5) {
					setValue(5);
					setSelectedIndex(3);
				}
				break;
			case "/careers":
				if (value !== 6) {
					setValue(6);
				}
				break;
			case "/contact":
				if (value !== 7) {
					setValue(7);
				}
				break;
			default:
				break;
		}
	}, [value]);

	return (
		<>
			<ElevationScroll>
				<AppBar>
					<Toolbar disableGutters className={classes.toolbar}>
						<Button
							component={Link}
							to="/"
							onClick={() => setValue(0)}
							disableRipple
							className={classes.logoContainer}>
							<img src={logo} alt="logo" className={classes.logo} />
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}>
							<Tab
								className={classes.tab}
								component={Link}
								to="/"
								label="Home"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="about-hems"
								label="About HEMS"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="operations"
								label="Operations"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="support-hems"
								label="Support HEMS"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="news-events"
								label="News & Events"
							/>
							<Tab
								aria-owns={anchorEl ? "training-menu" : undefined}
								aria-haspopup={anchorEl ? "true" : undefined}
								onMouseOver={(e) => handleClick(e)}
								className={classes.tab}
								component={Link}
								to="training"
								label="Training"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="careers"
								label="Careers"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="contact"
								label="Contact"
							/>
						</Tabs>
						<Menu
							id="training-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							classes={{ paper: classes.menu }}
							MenuListProps={{ onMouseLeave: handleClose }}
							elevation={0}>
							{menuOptions.map((option, i) => (
								<MenuItem
									key={i}
									onClick={(e) => {
										handleMenuItemClick(e, i);
										setValue(5);
										handleClose();
									}}
									selected={i === selectedIndex && value === 5}
									component={Link}
									to={option.link}
									classes={{ root: classes.menuItem }}>
									{option.name}
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}
