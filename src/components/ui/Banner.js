import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import banner from "../../assets/img/banner/donation-banner.png";

const useStyles = makeStyles((theme) => ({
	bannerContainer: {
		paddingTop: "10px",
	},
	banner: {
		height: "7em",
		maxWidth: "100%",
		width: "1920px",
		[theme.breakpoints.down("md")]: {},
		[theme.breakpoints.down("xs")]: {},
	},
}));

export default function Banner(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<>
			<div className={classes.bannerContainer}>
				{matches ? null : (
					<Button component={Link} to="/donation" disableRipple>
						<img
							className={classes.banner}
							src={banner}
							alt="donation-banner"
						/>
					</Button>
				)}
			</div>
		</>
	);
}
