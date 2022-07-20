import { useState, useEffect } from "react";
function App() {
	const [singers, setSingers] = useState("");
	const [singArray, setSingArray] = useState([]);
	const onChange = (e) => {
		setSingers(e.target.value)
	}
	const onSubmit = (e) => {
		e.preventDefault();
		setSingArray(def => [singArray.length < 1 ? singers : singers+", " , ...def])
		console.log(singArray);
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