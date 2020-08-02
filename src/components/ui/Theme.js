import { createMuiTheme } from "@material-ui/core/styles";

const hemsRed = "#58291f";
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
});
