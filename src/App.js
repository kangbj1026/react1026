import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // npm i react-router-dom@5.3.0
import Home from "./routes/Home"
import Detail from "./routes/Detail"
function App() {
	return (
	<Router>
		<Switch> {/*Switch Route 찾는 일, Route 는 URL을 의미, Route를 찾으면 컴포넌트를 렌더링 */}
			<Route path="/movie/:id">
				<Detail/>
			</Route>
			<Route path="/">
				<Home/>
			</Route>
		</Switch>
	</Router>
	);
}

export default App;