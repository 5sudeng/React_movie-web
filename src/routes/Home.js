import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div>
          <h1>MOVIES</h1>
          <div className={styles.moviediv}>
            {movies.map((movie) => (
              <Movie
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                key={movie.id}
                id={movie.id}
                rate={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
