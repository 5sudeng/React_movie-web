import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovie();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            title={details.title_long}
            img={details.large_cover_image}
            detail={details.description_full}
            uploaded={details.date_uploaded}
            downloaded={details.download_count}
            runtime={details.runtime}
            genres={details.genres}
            rating={details.rating}
            url={details.url}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
