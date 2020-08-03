import React, { useState } from "react";
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
		height: "7.5em",
		marginLeft: "-7px",
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
	return (
		<>
			<ElevationScroll>
				<AppBar>
					<Toolbar disableGutters className={classes.toolbar}>
						<img src={logo} alt="logo" className={classes.logo} />
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
