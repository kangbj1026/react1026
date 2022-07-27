import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // npm i react-router-dom@5.3.0
function Movie({id, title, coverImg, summary, genres}) {
	return <div>
		<h2><Link to={`/movie/${id}`}>{title}</Link></h2>
		<img src={coverImg} alt={title}/>
		<p>{summary}</p>
		<ul>
			{genres.map((g)=><li key={g}>{g}</li>)}
		</ul>
	</div>;
}

Movie.prototype = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;