import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, rate }) {
  return (
    <div className={styles.div}>
      <Link to={`/react-movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>
        <Link to={`/react-movie/${id}`}>{title}</Link>
      </h2>
      {genres ? <span>Genres</span> : null}
      <ul>
        {genres &&
          genres.map((g /* hasOwnProperty("genre") 장르 있는지 확인*/) => (
            <li key={g}>{g}</li>
          ))}
      </ul>
      <p>rating : ⭐️ {rate}</p>
      <p>{summary.length > 255 ? summary.slice(0, 255) + "..." : summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  rate: PropTypes.number.isRequired,
};

export default Movie;

/* npm install react-router-dom */
