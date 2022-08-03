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
		const getMovies = await fetch("https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year");
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
		(<div className={styles.movie_container}>
			<div className={styles.movies}>
				{movies.map((movie) =>
				<Movie
					key={movie.id}
					id={movie.id}
					titleLong={movie.title_long}
					url={movie.url}
					coverImg={movie.medium_cover_image}
					rating={movie.rating}/>
			)}
			</div>
		</div>
		)
		}
	</div>;
}

export default Home;