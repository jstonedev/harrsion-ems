import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { HomeCarousel } from "../components/ui/HomeCarousel";

const useStyles = makeStyles((theme) => ({}));

export const Home = () => {
	const classes = useStyles();
	return (
		<Grid container direction="column">
			<Grid item>
				{/*---image carousel section---*/}
				<HomeCarousel />
			</Grid>
			<Grid item>
				{/*---features section---*/}
				<Grid direction="row">
					<Grid item></Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
