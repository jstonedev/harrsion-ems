import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
	},
	button: {
		borderRadius: "50px",
		marginLeft: "30px",
		marginRight: "25px",
		fontFamily: "Pacifico",
		fontSize: "1rem",
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/about-hems" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/operations" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/support-hems" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/news-events" && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === "/training" && value !== 5) {
			setValue(5);
		} else if (window.location.pathname === "/careers" && value !== 6) {
			setValue(6);
		} else if (window.location.pathname === "/contact" && value !== 7) {
			setValue(7);
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
								to="home"
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
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}
