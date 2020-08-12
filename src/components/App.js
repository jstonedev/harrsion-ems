import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						component={() => <div style={{ height: "2000px" }}>Home</div>}
					/>
					<Route
						exact
						path="/about-hems"
						component={() => <div>About HEMS</div>}
					/>
					<Route
						exact
						path="/operations"
						component={() => <div>Operations</div>}
					/>
					<Route
						exact
						path="/donation"
						component={() => <div>Support HEMS</div>}
					/>
					<Route
						exact
						path="/news-events"
						component={() => <div>News & Events</div>}
					/>
					<Route exact path="/training" component={() => <div>Training</div>} />
					<Route
						exact
						path="/ems-courses"
						component={() => <div>EMS Courses</div>}
					/>
					<Route
						exact
						path="/aha-courses"
						component={() => <div>AHA Courses</div>}
					/>
					<Route
						exact
						path="/course-registration"
						component={() => <div>Course Registration</div>}
					/>
					<Route exact path="/careers" component={() => <div>Careers</div>} />
					<Route exact path="/contact" component={() => <div>Contact</div>} />
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
