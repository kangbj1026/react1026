import { useState, useEffect } from "react";
function App() {
	const [toDo,setToDo] = useState("");
	const [toDos,setToDos] = useState([]);
	const onChange = (eve) => setToDo(eve.target.value)
	const onSubmit = (eve) => {
		eve.preventDefault();
		if (toDo === "") {
			console.log(toDo);
		}
		setToDos(currentArray => [toDo, ...currentArray]);
		setToDo("");
	}
	console.log(toDos);
	return <div>
		<h1>My YO Dos {toDos.length}</h1>
		<form onSubmit={onSubmit}>
		<input type={"text"} onChange={onChange} placeholder={"Write your to do..."} value={toDo}/>
		<button>Add To Do</button>
		</form>
	</div>;
}

export default App;