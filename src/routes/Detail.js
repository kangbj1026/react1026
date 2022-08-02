import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
function Detail() {
	const {id} = useParams();
	const [movieData, setMovieData] = useState([]);
	const getMovie = async() => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovieData(json.data.movie)
	}
	const conBackground = {
		backgroundImage: `url(${movieData.background_image_original})`,
	}
	useEffect(()=>{
		getMovie();
	},[])
	return (
	<div className={styles.container} style={conBackground}>
		<div key={movieData.id}>
			<h2 className={styles.title}>{movieData.title_long}</h2>
			<div className={styles.inform}>
				<img src={movieData.large_cover_image} alt={movieData.title} className={styles.movie_img}/>
				<div>
					<p className={styles.intro}>{movieData.description_intro === "" ? "There is no description_intro. " : movieData.description_intro}</p>
					<p className={styles.rating}>rating : <span>{movieData.rating}</span></p>
					<p className={styles.runtime}>runtime : <span>{movieData.runtime}</span></p>
					<ul className={styles.genres}>
						{movieData.genres ? movieData.genres.map((g) => (<li className="detailGenre" key={g}>{g}</li>)) : null}
					</ul>
				</div>
			</div>
		</div>
	</div>
	);
}
export default Detail;