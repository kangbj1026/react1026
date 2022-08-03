import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // npm i react-router-dom@5.3.0
import styles from "./Movie.module.css"
function Movie({id, titleLong, coverImg, rating}) {
	return (
	<div className={styles.movie}>
		<Link to={`/movie/${id}`}>
		<img src={coverImg} alt={titleLong} className={styles.movie_img}/>
		</Link>
		<h2 className={styles.movie_title}>
			{titleLong}
		</h2>
		{/* <h3 className={styles.movie_rating}>{rating}</h3> */}
		{/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
		{/* <ul className={styles.movie__genres}>
			{genres.map((g)=><li key={g}>{g}</li>)}
		</ul> */}
	</div>);
}

Movie.prototype = {
	id: PropTypes.string.isRequired,
	titleLong: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired,
	// summary: PropTypes.string.isRequired,
	// genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;