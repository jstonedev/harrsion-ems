import { createMuiTheme } from "@material-ui/core/styles";

const hemsRed = "#800000";
const hemsGreen = "#fbc002";

export default createMuiTheme({
	palette: {
		common: {
			red: `${hemsRed}`,
			green: `${hemsGreen}`,
		},
		primary: {
			main: `${hemsRed}`,
		},
		secondary: {
			main: `${hemsGreen}`,
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: "700",
			fontSize: "1rem",
		},
	},
});
