import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import logo from "../../assets/img/header-logo.png";

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
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "1em",
	},
	logo: {
		height: "4.5em",
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
}));

export default function Header(props) {
	const classes = useStyles();
	return (
		<>
			<ElevationScroll>
				<AppBar>
					<Toolbar disableGutters>
						<img src={logo} alt="logo" className={classes.logo} />
						<Tabs className={classes.tabContainer}>
							<Tab className={classes.tab} label="Home" />
							<Tab className={classes.tab} label="About HEMS" />
							<Tab className={classes.tab} label="Operations" />
							<Tab className={classes.tab} label="Support HEMS" />
							<Tab className={classes.tab} label="News & Events" />
							<Tab className={classes.tab} label="Training" />
							<Tab className={classes.tab} label="Careers" />
							<Tab className={classes.tab} label="Contact" />
						</Tabs>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}
