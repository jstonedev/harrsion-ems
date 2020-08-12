import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import footerImg from "../../assets/img/large-footer-slash.png";

const useStyles = makeStyles((theme) => ({
	footer: {
		background: theme.palette.common.red,
		width: "100%",
		zIndex: 1302,
		position: "relative",
	},
	slash: {
		width: "25em",
		verticalAlign: "bottom",
		[theme.breakpoints.down("md")]: {
			width: "22em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "15em",
		},
	},
	mainContainer: {
		position: "absolute",
	},
	footerLink: {
		color: "white",
		fontFamily: "Arial",
		fontSize: "0.75rem",
		fontWeight: "bold",
		textDecoration: "none ",
	},
	gridItem: {
		margin: "2em",
	},
}));

export default function Footer(props) {
	const classes = useStyles();

	const routes = [
		{ name: "Home", link: "/" },
		{ name: "About HEMS", link: "/about-hems" },
		{ name: "Operations", link: "/operations" },
		{ name: "Medical Standbys", link: "/opeations" },
		{ name: "Emergency Planning", link: "/operations" },
		{ name: "Emergency Prevention", link: "/operations" },
		{ name: "File of Life", link: "/operations" },
		{ name: "News & Events", link: "/news-events" },
		{ name: "Training", link: "/training" },
		{ name: "EMS Courses", link: "/ems-courses" },
		{ name: "AHA Courses", link: "/aha-courses" },
		{ name: "Course Registration", link: "/course-registration" },
		{ name: "Careers", link: "/careers" },
		{ name: "Apply Now", link: "/careers" },
		{ name: "Explorer Program", link: "/careers" },
		{ name: "Contact", link: "/contact" },
	];

	return (
		<footer className={classes.footer}>
			<Grid container justify="center" className={classes.mainContainer}>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid item component={Link} to="/" className={classes.footerLink}>
							Home
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							component={Link}
							to="/about-hems"
							className={classes.footerLink}>
							About HEMS
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							component={Link}
							to="/operations"
							className={classes.footerLink}>
							Operations
						</Grid>
						<Grid
							item
							component={Link}
							to="/operations"
							className={classes.footerLink}>
							Medical Standbys
						</Grid>
						<Grid
							item
							component={Link}
							to="/operations"
							className={classes.footerLink}>
							Emergency Planning
						</Grid>
						<Grid
							item
							component={Link}
							to="/operations"
							className={classes.footerLink}>
							Emergency Prevention
						</Grid>
						<Grid
							item
							component={Link}
							to="/operations"
							className={classes.footerLink}>
							File of Life
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							component={Link}
							to="/news-events"
							className={classes.footerLink}>
							News & Events
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							component={Link}
							to="/training"
							className={classes.footerLink}>
							Training
						</Grid>
						<Grid
							item
							component={Link}
							to="/ems-courses"
							className={classes.footerLink}>
							EMS Courses
						</Grid>
						<Grid
							item
							component={Link}
							to="/aha-courses"
							className={classes.footerLink}>
							AHA Courses
						</Grid>
						<Grid
							item
							component={Link}
							to="/course-registration"
							className={classes.footerLink}>
							Course Registration
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							component={Link}
							to="/careers"
							className={classes.footerLink}>
							Careers
						</Grid>
						<Grid
							item
							component={Link}
							to="/careers"
							className={classes.footerLink}>
							Apply Now
						</Grid>
						<Grid
							item
							component={Link}
							to="/careers"
							className={classes.footerLink}>
							Explorer Program
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid
							item
							component={Link}
							to="/contact"
							className={classes.footerLink}>
							Contact
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<img
				src={footerImg}
				alt="black decorative slash"
				className={classes.slash}
			/>
		</footer>
	);
}
