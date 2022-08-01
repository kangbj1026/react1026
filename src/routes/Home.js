import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	useEffect(()=> {
		getMovies()
	},[])
	const getMovies = async() => {
		const getMovies = await fetch("https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year");
		const json = await getMovies.json();
		setMovies(json.data.movies);
		setLoading(false);
	}
	return <div className={styles.container}>
		{loading ?
		<div className={styles.loader}>
			<h1>Loading... </h1>
		</div>
		:
		<div className={styles.movies}>
			{movies.map((movie) =>
			<Movie
				key={movie.id}
				id={movie.id}
				title={movie.title}
				url={movie.url}
				coverImg={movie.medium_cover_image}
				summary={movie.summary}
				genres={movie.genres}
				year={movie.year}/>
		)}
		</div>
		}
	</div>;
}

export default Home;