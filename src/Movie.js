import PropTypes from "prop-types";

function Movie({title, url, coverImg, summary, genres}) {
	return <div>
		<h1><a href={url}>{title}</a></h1>
		<img src={coverImg} alt={title}/>
		<p>{summary}</p>
		<ul>
			{genres.map((g)=><li key={g}>{g}</li>)}
		</ul>
	</div>;
}

Movie.prototype = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;