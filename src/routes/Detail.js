import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
function Detail() {
	const {id} = useParams();
	const [data, setData] = useState([]);
	const getMovie = async() => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setData(json.data.movie)
	}
	useEffect(()=>{
		getMovie();
	},[])
	return (
		<div key={data.id}>
			<h2>{data.title}</h2>
			<img src={data.medium_cover_image} alt={data.title}/>
			<p>{data.description_intro}</p>
			<ul>
				{data.genres.map((g)=><li key={g}>{g}</li>)}
			</ul>
		</div>
	);
}
export default Detail;