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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/img/header-logo-new.png";
import Banner from "./Banner";

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
		height: "112px",
		[theme.breakpoints.down("md")]: {
			height: "98px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "78px",
		},
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "2.5em",
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
		},
	},
	logo: {
		height: "8em",
		marginLeft: "-7px",
		[theme.breakpoints.down("md")]: {
			height: "7em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em",
		},
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
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	drawerIcon: {
		height: "50px",
		width: "50px",
		color: theme.palette.common.green,
	},
	drawer: {
		backgroundColor: theme.palette.common.red,
	},
	drawerItem: {
		...theme.typography.tab,
		color: "white",
		opacity: 0.7,
	},
	drawerItemDonate: {
		backgroundColor: theme.palette.common.green,
	},
	drawerItemSelected: {
		opacity: 1,
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
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
			case "/news-events":
				if (value !== 3) {
					setValue(3);
				}
				break;
			case "/training":
				if (value !== 4) {
					setValue(4);
					setSelectedIndex(0);
				}
				break;
			case "/ems-courses":
				if (value !== 4) {
					setValue(4);
					setSelectedIndex(1);
				}
				break;
			case "/aha-courses":
				if (value !== 4) {
					setValue(4);
					setSelectedIndex(2);
				}
				break;
			case "/course-registration":
				if (value !== 4) {
					setValue(4);
					setSelectedIndex(3);
				}
				break;
			case "/careers":
				if (value !== 5) {
					setValue(5);
				}
				break;
			case "/contact":
				if (value !== 6) {
					setValue(6);
				}
				break;
			case "/support-hems":
				if (value !== 7) {
					setValue(7);
				}
				break;
			default:
				break;
		}
	}, [value]);

	const tabs = (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor={Tabs.value !== 7 ? "secondary" : "primary"}>
				<Tab className={classes.tab} component={Link} to="/" label="Home" />
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
				{/* <Tab
					className={classes.tab}
					component={Link}
					to="support-hems"
					label="Support HEMS"
				/> */}
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
				open={openMenu}
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
		</>
	);

	const drawer = (
		<>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}>
				<List disablePadding>
					<ListItem
						divider
						button
						component={Link}
						to="/"
						onClick={() => {
							setOpenDrawer(false);
							setValue(0);
						}}
						selected={value === 0}>
						<ListItemText
							disableTypography
							className={
								value === 0
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							Home
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/about-hems"
						onClick={() => {
							setValue(0);
						}}
						selected={value === 1}>
						<ListItemText
							disableTypography
							className={
								value === 1
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							About HEMS
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/operations"
						onClick={() => {
							setOpenDrawer(false);
							setValue(2);
						}}
						selected={value === 2}>
						<ListItemText
							disableTypography
							className={
								value === 2
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							Operations
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/news-events"
						onClick={() => {
							setOpenDrawer(false);
							setValue(3);
						}}
						selected={value === 3}>
						<ListItemText
							disableTypography
							className={
								value === 3
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							News & Events
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/training"
						onClick={() => {
							setOpenDrawer(false);
							setValue(4);
						}}
						selected={value === 4}>
						<ListItemText
							disableTypography
							className={
								value === 4
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							Training
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/careers"
						onClick={() => {
							setOpenDrawer(false);
							setValue(5);
						}}
						selected={value === 5}>
						<ListItemText
							disableTypography
							className={
								value === 5
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							Careers
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						component={Link}
						to="/contact"
						onClick={() => {
							setOpenDrawer(false);
							setValue(6);
						}}
						selected={value === 6}>
						<ListItemText
							disableTypography
							className={
								value === 6
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							Contact
						</ListItemText>
					</ListItem>
					<ListItem
						divider
						button
						className={classes.drawerItemDonate}
						component={Link}
						to="/donation"
						onClick={() => {
							setOpenDrawer(false);
							setValue(7);
						}}
						selected={value === 7}>
						<ListItemText
							disableTypography
							className={
								value === 7
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}>
							Donate Now
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</>
	);

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
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
			<Banner />
		</>
	);
}
