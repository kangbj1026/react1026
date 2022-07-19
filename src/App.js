import { useState, useEffect } from "react";
function App() {
	const [singers, setSingers] = useState("");
	const [singArray, setSingArray] = useState([]);
	const onChange = (e) => {
		setSingers(e.target.value)
	}
	const onSubmit = (e) => {
		e.preventDefault();
		setSingArray(def => [singers.length == 1 ? singers : singers+", " , ...def])
	}
	return <div>
		<h1>Names : {singArray}</h1>
		<form onSubmit={onSubmit}>
			<input type={"text"} placeholder="Singer .." onChange={onChange} value={singers}/>
			<button>Submit</button>
		</form>
	</div>;
}

export default App;