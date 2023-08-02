import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({
  title,
  img,
  detail,
  uploaded,
  downloaded,
  runtime,
  genres,
  rating,
  url,
}) {
  return (
    <div className={styles.whole}>
      <h2>{title}</h2>
      <div className={styles.detaildiv}>
        <img src={img} />
        <div className={styles.textdiv}>
          <p>{`🎬 Uploaded : ${uploaded}`}</p>
          <p>{detail}</p>
          <p>{`🔻 Downloaded : ${downloaded}`}</p>
          {runtime === 0 ? null : (
            <p>{`⏳ Runtime : ${parseInt(runtime / 60)}h ${runtime % 60}m`}</p>
          )}
          {genres ? <span>Genres</span> : null}
          <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
          <p>{`Rating : ⭐️ ${rating}`}</p>
          <a href={url}>{`For more -> ${url}`}</a>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  uploaded: PropTypes.string,
  url: PropTypes.string,
  runtime: PropTypes.number,
  downloaded: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
};

export default MovieDetail;
