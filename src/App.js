import { useState, useEffect } from "react";
function App() {
	const [loading,setLoading] = useState(true);
	const [movies,setMovies] = useState([]);
	const getMovies = async() => {
		const response = await fetch("https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.5&sort_by=year");
		const json = await response.json();
		setMovies(json.data.movies)
		setLoading(false)
	}
	useEffect(()=>{
		getMovies()
	},[])
	console.log(movies);
	return <div>
		{loading ?
		(<h1>Loading...</h1>)
		:
		<div>
			{movies.map((movie) =>
			<div key={movie.id}>
				<h2><a href={movie.url}>{movie.title}</a></h2>
				<p>{movie.summary}</p>
				<ul>
					{movie.genres.map((g) => <li key={g}>{g}</li>)}
				</ul>
				<img src={movie.medium_cover_image} />
			</div>
			)}
		</div>
		}
	</div>;
}

export default App;