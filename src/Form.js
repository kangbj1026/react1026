import { useState, useEffect } from "react";
function Form() {
	const [singers, setSingers] = useState("");
	const [singArray, setSingArray] = useState([]);
	const onChange = (e) => {
		setSingers(e.target.value)
	}
	const onSubmit = (e) => {
		e.preventDefault();
		setSingArray(def => [singers, ...def])
	}
	console.log(singArray);
	console.log(singArray.map((item,index)=><li key={index}>{item}</li>));
	return <div>
		<h1>Names : {singArray.length}</h1>
		<form onSubmit={onSubmit}>
			<input type={"text"} placeholder="Singer .." onChange={onChange} value={singers}/>
			<button>Submit</button>
		</form>
		<hr/>
		{singArray.map((item,index)=><li key={index}>{item}</li>)}
	</div>;
}

export default Form;