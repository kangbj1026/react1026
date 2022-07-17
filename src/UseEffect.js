import { useState, useEffect } from "react";

function UseEffect() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((def) => def + 1);
	const onChange = (e) => setKeyword(e.target.value);
	useEffect(()=>{
		console.log("I run only once");
	}, []);
	useEffect(()=>{
		console.log("I run when 'keyword' changes");
	}, [keyword]);
	useEffect(()=>{
		console.log("I run when 'counter' changes");
	}, [counter]);
	useEffect(()=>{
		console.log("I run when keyword & counter changes");
	}, [keyword, counter]);
	return (
		<div>
			<input value={keyword} onChange={onChange} type={"text"} placeholder="Searh here..."/>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default UseEffect;