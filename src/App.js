import { useState, useEffect } from "react";
function Hi() {
	return <h1>Hello</h1>
}
const Bye = () => <h1>Bye</h1>

function App() {
	const [showing, setShowing] = useState(true);
	const onClick = () => {
		setShowing((def) => !def);
	}
	return (
		<div>
			{showing ? <Hi/> : <Bye/>}
			<button onClick={onClick}>{showing ? "Show" : "Hide" }</button>
		</div>
	);
}

export default App;