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
		"& .MuiListItemText-root": {
			opacity: 1,
		},
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1,
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
		{
			name: "Training",
			link: "/training",
			activeIndex: 4,
			selectedIndex: 0,
			ariaOwns: anchorEl ? "training-menu" : undefined,
			ariaHasPopup: anchorEl ? "true" : undefined,
			mouseOver: (event) => handleClick(event),
		},
		{
			name: "EMS Courses",
			link: "/ems-courses",
			activeIndex: 4,
			selectedIndex: 1,
		},
		{
			name: "AHA Courses",
			link: "/aha-courses",
			activeIndex: 4,
			selectedIndex: 2,
		},
		{
			name: "Course Registration",
			link: "/course-registration",
			activeIndex: 4,
			selectedIndex: 3,
		},
	];

	const routes = [
		{ name: "Home", link: "/", activeIndex: 0 },
		{ name: "About HEMS", link: "/about-hems", activeIndex: 1 },
		{ name: "Operations", link: "/operations", activeIndex: 2 },
		{ name: "News & Events", link: "/news-events", activeIndex: 3 },
		{ name: "Training", link: "/training", activeIndex: 4 },
		{ name: "Careers", link: "/careers", activeIndex: 5 },
		{ name: "Contact", link: "/contact", activeIndex: 6 },
		// { name: "Donate", link: "/donation", activeIndex: 7 },
	];

	useEffect(() => {
		[...menuOptions, ...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex);
						if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
							setSelectedIndex(route.selectedIndex);
						}
					}
					break;

				default:
					break;
			}
		});
	}, [value, menuOptions, selectedIndex, routes]);

	const tabs = (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor={Tabs.value !== 7 ? "secondary" : "primary"}>
				{/* {routes.map((route, index) => (
					<Tab
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
						className={classes.tab}
						component={Link}
						to={route.link}
						label={route.name}
					/>
				))} */}

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
				elevation={0}
				style={{ zIndex: 1302 }}
				keepMounted>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={i}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(e) => {
							handleMenuItemClick(e, i);
							setValue(5);
							handleClose();
						}}
						selected={i === selectedIndex && value === 4}>
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
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route) => (
						<ListItem
							key={`${route}${route.activeIndex}`}
							divider
							button
							component={Link}
							to={route.link}
							selected={value === route.activeIndex}
							classes={{ selected: classes.drawerItemSelected }}
							onClick={() => {
								setOpenDrawer(false);
								setValue(route.activeIndex);
							}}>
							<ListItemText className={classes.drawerItem} disableTypography>
								{route.name}
							</ListItemText>
						</ListItem>
					))}

					<ListItem
						divider
						button
						classes={{
							root: classes.drawerItemDonate,
							selected: classes.drawerItemSelected,
						}}
						component={Link}
						to="/donation"
						onClick={() => {
							setOpenDrawer(false);
							setValue(7);
						}}
						selected={value === 7}>
						<ListItemText disableTypography className={classes.drawerItem}>
							Donate Now
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>

			{/* drawer button  */}
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
				<AppBar position="fixed" className={classes.appbar}>
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
