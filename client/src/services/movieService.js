import http from "./httpService";
import { apiUrl } from "../config.json";

function movieUrl(id) {
  return http.get(`${apiUrl}/${id}`);
}
export function getMovies() {
  return http.get(apiUrl);
}

export function getMovie(movieId) {
  return http.put(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiUrl + "/" + movie._id);
  }
  return http.post(apiUrl, movie);
}

export function deleteMovie(id) {
  return http.delete(`${apiUrl}/${id}`);
}
