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
	const position = ['top','floor'];
	const ScrollToTop = () => {
		return window.scrollTo(0,document.body.scrollTop);
	}
	const ScrollFloor = () => {
		return window.scrollTo(0,document.body.scrollHeight);
	}
	return <div className={styles.container}>
		{loading ?
		<div className={styles.loader}>
			<h1>Loading... </h1>
		</div>
		:
		(<div className={styles.movie_container}>
			<div id={position[0]}>
				<nav className={styles.position_nav}>
					<ul className={styles.position}>
						{/* {position.map((root,index) => <li className={styles.positions} key={index}><a href={`#${root}`}>{root}</a></li>)} */}
						{position.map((root,index) => <li className={styles.positions} key={index}><button onClick={root === "top" ? ScrollToTop : ScrollFloor}>{root}</button></li>)}
					</ul>
				</nav>
			</div>
			<div className={styles.movies}>
				{movies.map((movie,index) =>
				<Movie
					index={index}
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
			<div id={position[1]}></div>
		</div>
		)
		}
	</div>;
}

export default Home;